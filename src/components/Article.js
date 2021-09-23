import React from 'react';

function checkMins (num) { //I got fucking lazy ok
    if (num <= 5) {
      return " ••• ☕️ " + num + " min read";
    } else if (num <= 10) {
      return " ••• ☕️☕️ " + num + " min read";
    } else if (num <= 15) {
      return " ••• ☕️☕️☕️ " + num + " min read";
    } else if (num <= 20) {
      return " ••• ☕️☕️☕️☕️ " + num + " min read";
    } else if (num <= 25) {
      return " ••• ☕️☕️☕️☕️☕️ " + num + " min read";
    } else if (num <= 30) {
      return " ••• ☕️☕️☕️☕️☕️☕️ " + num + " min read";
    } else if (num <= 40) {
      return " ••• 🍱🍱🍱🍱 " + num + " min read";
    } else if (num <= 50) {
      return " ••• 🍱🍱🍱🍱🍱 " + num + " min read";
    } else if (num <= 60) {
      return " ••• 🍱🍱🍱🍱🍱🍱 " + num + " min read";
    } else if (num <= 70) {
      return " ••• 🍱🍱🍱🍱🍱🍱🍱 " + num + " min read";
    }
  }

function Article({ title, date = "January 1, 1970", preview, minutes }) {
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <small>{checkMins(minutes)}</small>
            <p>{preview}</p>

        </article>
    );
}

export default Article;