"use client";

import { useState, useEffect } from "react";

export interface BilingualData<T> {
  en: T;
  ar: T;
}

/**
 * Detects whether fetched data uses the new bilingual `{ en, ar }` structure
 * or legacy flat structure, and normalises to bilingual.
 */
function normaliseBilingual<T>(raw: unknown, fallback: T): BilingualData<T> {
  if (raw && typeof raw === "object" && "en" in (raw as Record<string, unknown>)) {
    const obj = raw as Record<string, unknown>;
    return {
      en: (obj.en as T) ?? fallback,
      ar: (obj.ar as T) ?? fallback,
    };
  }
  // Legacy flat data — treat as English, clone for Arabic
  return {
    en: (raw as T) ?? fallback,
    ar: structuredClone(fallback),
  };
}

export function useSiteContent<T>(sectionId: string, defaultValue: T) {
  const [data, setData] = useState<BilingualData<T>>({
    en: defaultValue,
    ar: structuredClone(defaultValue),
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<"" | "saved" | "error">("");

  useEffect(() => {
    fetch(`/api/cms/site-content?id=${sectionId}`, { credentials: "include" })
      .then((r) => r.json())
      .then((result) => {
        if (result?.data) {
          setData(normaliseBilingual<T>(result.data, defaultValue));
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [sectionId]); // eslint-disable-line react-hooks/exhaustive-deps

  const save = async () => {
    setSaving(true);
    setStatus("");
    try {
      const res = await fetch("/api/cms/site-content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: sectionId, data }),
        credentials: "include",
      });
      setStatus(res.ok ? "saved" : "error");
    } catch {
      setStatus("error");
    }
    setSaving(false);
    setTimeout(() => setStatus(""), 3000);
  };

  /** Helper to update a specific language */
  const setLangData = (lang: "en" | "ar", patch: Partial<T>) => {
    setData((prev) => ({
      ...prev,
      [lang]: { ...prev[lang], ...patch },
    }));
  };

  return { data, setData, setLangData, loading, saving, save, status };
}
