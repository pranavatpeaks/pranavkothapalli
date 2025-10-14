import React from "react";

const book = {
  title: "Bhagavad Gita As It Is",
  author: "A.C. Bhaktivedanta Swami Prabhupada",
  cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ljZY-OZXNts8zG1_ZMifcRo7xp5YUmS_SA&s",
  description:
    "The largest-selling edition of the Gita all over the world, Bhagavad-Gita as It Is, is more than a book. For many it has changed their lives altogether. Universally Bhagavad-Gita is renowned and truly claimed as the crown jewel of India?s spiritual wisdom. Spoken by Lord Krishna the Supreme Personality of Godhead to His intimate disciple Arjuna, the Gita’s seven hundred concise verses provides a definitive guide to the science of self realization. Complete wisdom with original sanskrit texts, word to word meaning, translation and purpot by His divine gracre A.C Bhakti Vedanta Swami Srila Prabhupada, Founder acharya of ISKCON",
  year: 1972,
  genre: "Spiritual, Philosophy",
  link: "https://krsnaconsciousness.com/products/bhagavad-gita-as-it-is-macmillan-edition"
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
