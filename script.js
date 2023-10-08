/*Here we have created two different arrays that you can work with if you want.
If you choose to create your own arrays with elements, just make sure that some
of the properties make sense to filter on, and some to sort on.*/

// Array of books data
const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Fiction",
    rating: 4.2,
    description:
      "A classic novel set in the Roaring Twenties, it explores themes of wealth, love, and the American Dream through the enigmatic Jay Gatsby.",
    image: "./books-images/the-great-gatsby.jpg",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Fiction",
    rating: 4.5,
    description:
      "Set in the American South, this novel tackles issues of racism and injustice through the eyes of young Scout Finch.",
    image: "./books-images/to-kill-a-mockingbird.jpg",
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genre: "Science Fiction",
    rating: 4.4,
    description:
      "A dystopian classic that explores totalitarianism and the consequences of a surveillance state in a bleak future.",
    image: "./books-images/1984.jpg",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    genre: "Fiction",
    rating: 4.25,
    description:
      "A timeless romance novel that examines societal expectations and the misunderstandings that can arise from pride and prejudice.",
    image: "./books-images/pride-and-prejudice.jpg",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
    genre: "Fiction",
    rating: 4,
    description:
      "Narrated by the teenage Holden Caulfield, the novel explores themes of alienation and the search for authenticity.",
    image: "./books-images/unknown.jpg",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    genre: "Fantasy",
    rating: 4.6,
    description:
      "A fantasy adventure novel that follows Bilbo Baggins on a quest to help a group of dwarves reclaim their homeland from a dragon.",
    image: "./books-images/the-hobbit.jpg",
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    year: 1997,
    genre: "Fantasy",
    rating: 4.7,
    description:
      "The first book in the beloved Harry Potter series, it introduces readers to the magical world of Hogwarts and the young wizard Harry Potter.",
    image: "./books-images/harry-potter-and-the-sorcerer.jpg",
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    year: 1851,
    genre: "Adventure",
    rating: 4.1,
    description:
      "An epic tale of obsession, revenge, and the relentless pursuit of the great white whale, Moby Dick.",
    image: "./books-images/moby-dick.jpg",
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    author: "J.R.R. Tolkien",
    year: 1954,
    genre: "Fantasy",
    rating: 4.55,
    description:
      "The first volume of the epic fantasy trilogy follows Frodo Baggins and the Fellowship on their quest to destroy the One Ring.",
    image: "./books-images/the-lord-of-the-rings.jpg",
  },
  {
    title: "The Shining",
    author: "Stephen King",
    year: 1977,
    genre: "Horror",
    rating: 4.3,
    description:
      "A psychological horror novel that tells the story of the Torrance family's terrifying experiences at the haunted Overlook Hotel.",
    image: "./books-images/unknown.jpg",
  },
  {
    title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
    author: "C.S. Lewis",
    year: 1950,
    genre: "Fantasy",
    rating: 4.15,
    description:
      "The first book in the Chronicles of Narnia series, it follows the adventures of children who discover the magical land of Narnia.",
    image: "./books-images/the-chronicles-of-narnia.jpg",
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    year: 2003,
    genre: "Mystery",
    rating: 3.8,
    description:
      "A gripping mystery thriller that follows Harvard symbologist Robert Langdon as he unravels the secrets of the Da Vinci Code.",
    image: "./books-images/unknown.jpg",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    year: 1988,
    genre: "Fiction",
    rating: 4.25,
    description:
      "A philosophical novel that tells the story of Santiago, a shepherd boy, on his quest to discover his personal legend.",
    image: "./books-images/unknown.jpg",
  },
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    year: 2008,
    genre: "Science Fiction",
    rating: 4.3,
    description:
      "In a dystopian future, Katniss Everdeen becomes a symbol of rebellion when she volunteers to take her sister's place in the brutal Hunger Games.",
    image: "./books-images/unknown.jpg",
  },
  {
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    year: 2005,
    genre: "Mystery",
    rating: 4.1,
    description:
      "A gripping mystery novel featuring investigative journalist Mikael Blomkvist and the enigmatic hacker Lisbeth Salander.",
    image: "./books-images/unknown.jpg",
  },
  {
    title: "The Road",
    author: "Cormac McCarthy",
    year: 2006,
    genre: "Dystopian",
    rating: 4,
    description:
      "Set in a post-apocalyptic world, it follows a father and son's harrowing journey to survive and find safety.",
    image: "./books-images/unknown.jpg",
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    year: 1979,
    genre: "Science Fiction",
    rating: 4.35,
    description:
      "A comedic science fiction series that follows the misadventures of Arthur Dent after Earth's destruction.",
    image: "./books-images/unknown.jpg",
  },
  {
    title: "The Giver",
    author: "Lois Lowry",
    year: 1993,
    genre: "Dystopian",
    rating: 4.12,
    description:
      "A dystopian novel set in a seemingly perfect society where young Jonas discovers the dark truth beneath the surface.",
    image: "./books-images/unknown.jpg",
  },
];

const bookContent = document.querySelector(".book-list");
const dropDown = document.getElementById("genres");
const sortDropdown = document.getElementById("sortBooks");
const userSearch = document.getElementById("user-search");

//Function for appending books
const appendBook = (book) => {
  const bookInfo = document.createElement("div");
  bookInfo.className = "book-info";

  const bookImg = document.createElement("img");
  bookImg.src = book.image;

  const bookTitle = document.createElement("h3");
  bookTitle.id = "book-title";
  bookTitle.textContent = book.title;

  // Author
  const authorLabel = document.createElement("strong");
  authorLabel.textContent = "Author: ";
  const bookAuthor = document.createElement("h4");
  bookAuthor.append(authorLabel, book.author);

  // Year
  const yearLabel = document.createElement("strong");
  yearLabel.textContent = "Year: ";
  const bookYear = document.createElement("h4");
  bookYear.append(yearLabel, book.year);

  // Genre
  const genreLabel = document.createElement("strong");
  genreLabel.textContent = "Genre: ";
  const bookGenre = document.createElement("h4");
  bookGenre.append(genreLabel, book.genre);

  // Rating
  const ratingLabel = document.createElement("strong");
  ratingLabel.textContent = "Rating: ";
  const bookRating = document.createElement("p");
  bookRating.append(ratingLabel, book.rating);

  // Description
  const bookDescription = document.createElement("p");
  bookDescription.textContent = book.description;

  bookInfo.appendChild(bookImg);
  bookInfo.appendChild(bookTitle);
  bookInfo.appendChild(bookAuthor);
  bookInfo.appendChild(bookYear);
  bookInfo.appendChild(bookGenre);
  bookInfo.appendChild(bookRating);
  bookInfo.appendChild(bookDescription);

  bookContent.appendChild(bookInfo);
};

// Display all books when page first loads
books.forEach((book) => appendBook(book));

// Filter Books based on genres
const filterBooks = (selected) => {
  // Remove previous books
  bookContent.textContent = "";

  if (selected === "all") {
    books.forEach((book) => appendBook(book));
  } else if (selected === "twentyFirst") {
    const filterTwentyFirst = books.filter((book) => book.year > 2000);
    filterTwentyFirst.forEach((book) => appendBook(book));
  } else {
    const filterGenres = books.filter((book) => {
      return book.genre === selected;
    });
    filterGenres.forEach((book) => {
      appendBook(book);
    });
  }
};

// Filter books from dropdown
dropDown.addEventListener("change", () => {
  const selectedGenre = dropDown.value;
  filterBooks(selectedGenre);
});

// Sort books with select
const sortBooks = (selected) => {
  // Remove previous books
  bookContent.textContent = "";

  switch (selected) {
    case "year-descending":
      const sortYearDesc = books.sort((a, b) => b.year - a.year);
      sortYearDesc.forEach((book) => appendBook(book));
      break;
    case "year-ascending":
      const sortYearAsc = books.sort((a, b) => a.year - b.year);
      sortYearAsc.forEach((book) => appendBook(book));
      break;
    case "rating-descending":
      const sortRatingDesc = books.sort((a, b) => b.rating - a.rating);
      sortRatingDesc.forEach((book) => appendBook(book));
      break;
    case "rating-ascending":
      const sortRatingAsc = books.sort((a, b) => a.rating - b.rating);
      sortRatingAsc.forEach((book) => appendBook(book));
      break;
    case "alphabetically":
      const sorted = books.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
      // Remove previous books
      bookContent.textContent = "";
      sorted.forEach((book) => appendBook(book));
      break;
    default:
      console.log("Nothing to sort");
  }
};

// Sort books using dropdown
sortDropdown.addEventListener("change", () => {
  const value = sortDropdown.value;
  sortBooks(value);
});

// Search books in input
userSearch.addEventListener("input", () => {
  const value = userSearch.value;
  const errorMsg = document.createElement("div");

  errorMsg.className = "error";

  const filterSearchBooks = books.filter((book) =>
    book.title.toLowerCase().includes(value.toLowerCase())
  );
  bookContent.textContent = "";

  if (filterSearchBooks.length === 0) {
    errorMsg.textContent = "Sorry, no such book exists.";
    bookContent.appendChild(errorMsg);
  } else {
    filterSearchBooks.forEach((book) => appendBook(book));
  }
});
