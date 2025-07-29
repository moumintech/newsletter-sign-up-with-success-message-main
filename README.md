# Frontend Mentor - Newsletter sign-up form with success message

![Design preview for the Newsletter sign-up form with success message coding challenge](./preview.jpg)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [How I Solved It](#how-i-solved-it)
  - [CSS Architecture](#css-architecture)
  - [Biggest Challenge](#biggest-challenge)
- [Deploy](#deploy)

## Overview

This project is a responsive newsletter sign-up form that includes validation and a confirmation message.  
It was built based on the [Frontend Mentor](https://www.frontendmentor.io) challenge and works on both desktop and mobile layouts.

## Features

| Feature             | Description                                                     |
| ------------------- | --------------------------------------------------------------- |
| Responsive Layout   | Built with Flexbox and media queries to adapt to screen sizes   |
| Email Validation    | JavaScript checks for a valid email format before submission    |
| Confirmation Screen | A custom success message is displayed after form submission     |
| Interactive Form    | Input errors are highlighted, and feedback is shown dynamically |

## Tech Stack

- **HTML5**
- **CSS3** (Flexbox, Media Queries)
- **JavaScript** (DOM manipulation, validation, class toggling)

## How I Solved It

### CSS Architecture

- I used **Flexbox** to center the content on the page both vertically and horizontally.
- The layout adapts depending on the device width (`375px` and `1440px` breakpoints).
- Classes like `.form`, `.success-message`, and `.error-message` were styled to be shown or hidden dynamically using a `.hidden` class.

### Biggest Challenge

The biggest challenge was managing the **form validation and toggling between views**:

- I used a simple email format check (`includes('@')` and `includes('.')`) to validate input, but a RegEx can be used for stricter validation.
- On successful submission, the form is hidden and the success message is displayed using:
  ```js
  form.classList.add("hidden");
  confirmationMessage.classList.remove("hidden");
  ```

You can view the live demo here: [Live Site](https://newsletter-sign-up-form-success.netlify.app/)
