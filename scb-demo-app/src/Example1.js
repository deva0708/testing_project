import React from 'react';
import './Example1.css';

function Example1() {
  return (
    <div className="exp">
      <header className="exp-header">
        <h1> Header</h1>
      </header>
      <nav className="exp-nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <main className="exp-main">
        <article className="exp-article">
          <div className="yellow-box">Section 1</div>
          <div className="yellow-box">Section 2</div>
          <div className="yellow-box">Section 3</div>
        </article>
        <aside className="exp-aside">
          <h2>Aside Section</h2>
          <p>This is Aside Content.</p>
        </aside>
      </main>
      <footer className="exp-footer">
        <p> My Website Footer @2024</p>
      </footer>
    </div>
  );
}

export default Example1;