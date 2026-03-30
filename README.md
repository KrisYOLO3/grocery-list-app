# Grocery List

A simple React + Vite grocery list application.

## Overview

This project is a lightweight grocery list manager built with React and Vite. It lets users add items, search existing items, mark items as completed, remove individual items, and clear the entire list. The list is stored in `localStorage` so items persist between page reloads.

## Features

- Add grocery items
- Search items by name
- Toggle items as completed
- Delete items
- Clear all items
- Persist list data with `localStorage`


## Project Structure

- `src/App.jsx` - main application logic and state management
- `src/components/AddForm/AddItem.jsx` - form for adding new grocery items
- `src/components/SearchForm/SearchItem.jsx` - search form component
- `src/components/GroceryList/GroceryList.jsx` - grocery list display component
- `src/components/GroceryList/GroceryItem.jsx` - individual grocery item component
- `src/components/Header/Header.jsx` - app header component

## Notes

This app is designed for local development and personal use. The UI is built with React components and styles are defined in CSS files located next to each component.
 for Fast Refresh
