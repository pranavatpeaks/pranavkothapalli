import React from "react";

const book = {
  title: "Freedom at Midnight",
  author: "Larry Collins & Dominique Lapierre",
  cover: "https://upload.wikimedia.org/wikipedia/en/5/5d/Freedom_at_Midnight_book_cover.jpg",
  description:
    "Freedom at Midnight is a historical narrative that chronicles the final year of British rule in India and the dramatic events surrounding Indian independence and partition in 1947. Through vivid storytelling, the authors explore the political negotiations, personal relationships, and human tragedies that shaped the birth of India and Pakistan. The book offers detailed portraits of key figures such as Mahatma Gandhi, Jawaharlal Nehru, Muhammad Ali Jinnah, and Lord Mountbatten, while capturing the triumphs, conflicts, and consequences of one of the most significant transitions in modern history.",
  year: 1975,
  genre: "History, Politics, Non-fiction",
  link: "https://en.wikipedia.org/wiki/Freedom_at_Midnight"
};



export const WhatAmIReadingSection = () => (
  <section id="reading" className="section-padding bg-background">
    <div className="container-responsive">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-2 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            What Am I Reading
          </h2>
          <div className="h-1 w-16 bg-primary rounded-full mx-auto shadow-glow"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto pt-2">
            Currently on my shelf
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8 pt-4 bg-card rounded-xl shadow-md p-6">
          {/* Book cover left */}
          <img
            src={book.cover}
            alt={book.title}
            className="w-40 h-60 object-cover rounded-md shadow mb-6 md:mb-0"
          />
          {/* Book details right */}
          <div className="flex-1 text-left md:pl-4">
            <h3 className="font-semibold text-2xl text-foreground mb-2">{book.title}</h3>
            <p className="text-md text-muted-foreground mb-1">by {book.author}</p>
            <p className="text-sm text-muted-foreground mb-2">{book.year} &middot; {book.genre}</p>
            <p className="text-base text-foreground mb-4">{book.description}</p>
            <a
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded shadow hover:bg-primary/80 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhatAmIReadingSection;
