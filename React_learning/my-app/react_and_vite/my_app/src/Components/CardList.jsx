import { useState } from "react";
const cardsData = [
  {
    id: 1,
    title: "Card 1",
    description: "This is the description for Card 1.",
  },
  {
    id: 2,
    title: "Card 2",
    description: "This is the description for Card 2.",
  },
  {
    id: 3,
    title: "Card 3",
    description: "This is the description for Card 3.",
  },
  {
    id: 4,
    title: "Card 4",
    description: "This is the description for Card 4.",
  },
  {
    id: 5,
    title: "Card 5",
    description: "This is the description for Card 5.",
  },
  {
    id: 6,
    title: "Card 6",
    description: "This is the description for Card 6.",
  },
  {
    id: 7,
    title: "Card 7",
    description: "This is the description for Card 7.",
  },
  {
    id: 8,
    title: "Card 8",
    description: "This is the description for Card 8.",
  },
];
function CardList() {
  const [showAll, setShowAll] = useState(false);
  const visibleData = showAll ? cardsData : cardsData.slice(0, 4);
  return (
    <div>
      {visibleData.map((card) => (
        <div
          key={card.id}
          style={{
            backgroundColor: "green",
            margin: "10px",
            padding: "10px",
            color: "white",
            borderRadius: "10px",
          }}
        >
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}

      {cardsData.length > 4 && (
        <button onClick={() => setShowAll(!showAll)} className="bg-red-600">
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
}

export default CardList;

// import React, { useState } from "react";

// // Sample data
// const cardsData = [
//   { id: 1, title: "Card 1", description: "This is the description for Card 1." },
//   { id: 2, title: "Card 2", description: "This is the description for Card 2." },
//   { id: 3, title: "Card 3", description: "This is the description for Card 3." },
//   { id: 4, title: "Card 4", description: "This is the description for Card 4." },
//   { id: 5, title: "Card 5", description: "This is the description for Card 5." },
//   { id: 6, title: "Card 6", description: "This is the description for Card 6." },
// ];

// function CardList() {
//   const [showAll, setShowAll] = useState(false);

//   // 👉 decide what to show
//   const visibleCards = showAll ? cardsData : cardsData.slice(0, 4);

//   return (
//     <div>
//       {/* CARDS */}
//       {visibleCards.map((card) => (
//         <div
//           key={card.id}
//           style={{
//             background: "green",
//             margin: "10px",
//             padding: "10px",
//             color: "white",
//             borderRadius: "10px",
//           }}
//         >
//           <h3>{card.title}</h3>
//           <p>{card.description}</p>
//         </div>
//       ))}

//       {/* BUTTON (only if more than 4 cards) */}
//       {cardsData.length > 4 && (
//         <button onClick={() => setShowAll(!showAll)}>
//           {showAll ? "Show Less" : "Show More"}
//         </button>
//       )}
//     </div>
//   );
// }

// export default CardList;
