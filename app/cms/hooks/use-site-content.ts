"use client";

import { useState, useEffect } from "react";

export function useSiteContent<T>(sectionId: string, defaultValue: T) {
  const [data, setData] = useState<T>(defaultValue);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<"" | "saved" | "error">("");

  useEffect(() => {
    fetch(`/api/cms/site-content?id=${sectionId}`)
      .then((r) => r.json())
      .then((result) => {
        if (result?.data) setData(result.data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [sectionId]);

  const save = async () => {
    setSaving(true);
    setStatus("");
    try {
      const res = await fetch("/api/cms/site-content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: sectionId, data }),
      });
      setStatus(res.ok ? "saved" : "error");
    } catch {
      setStatus("error");
    }
    setSaving(false);
    setTimeout(() => setStatus(""), 3000);
  };

  return { data, setData, loading, saving, save, status };
}
