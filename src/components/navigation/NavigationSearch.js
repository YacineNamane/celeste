"use client";

import { useState } from "react";
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

export default function NavigationSearch({ onNavigate }) {
  const [query, setQuery] = useState("");

  const searchTerms = normalizeText(query).split(/\s+/).filter(Boolean);

  const results = searchTerms.length
    ? searchableContent.filter((item) => {
        const content = normalizeText(
          [item.title, item.description, ...(item.keywords || [])].join(" "),
        );

        return searchTerms.every((term) => content.includes(term));
      })
    : [];

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
              <Link
                key={item.id}
                href={item.href}
                className={styles.result}
                onClick={onNavigate}
              >
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
