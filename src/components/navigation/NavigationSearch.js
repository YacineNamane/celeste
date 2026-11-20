"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import { searchableContent } from "@/data/search/searchIndex";
import styles from "./NavigationSearch.module.css";

function normalizeText(value = "") {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export default function NavigationSearch() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const normalizedQuery = normalizeText(query);

    if (!normalizedQuery) return [];

    return searchableContent.filter((item) => {
      const searchableText = [
        item.title,
        item.description,
        ...(item.keywords || []),
      ]
        .filter(Boolean)
        .map(normalizeText)
        .join(" ");

      return searchableText.includes(normalizedQuery);
    });
  }, [query]);

  return (
    <section className={styles.search}>
      <div className={styles.inputWrapper}>
        <input
          type="search"
          autoFocus
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Que recherchez-vous ?"
          aria-label="Rechercher sur CÉLESTE"
        />
      </div>

      {query.trim() && (
        <div className={styles.results} aria-live="polite">
          {results.length > 0 ? (
            results.map((item) => (
              <Link key={item.id} href={item.href} className={styles.result}>
                <div>
                  <span className={styles.title}>{item.title}</span>

                  {item.description && (
                    <p className={styles.description}>{item.description}</p>
                  )}
                </div>

                <span className={styles.category}>{item.type}</span>
              </Link>
            ))
          ) : (
            <p className={styles.empty}>Aucun résultat pour cette recherche.</p>
          )}
        </div>
      )}
    </section>
  );
}
