# Grocery List

A simple React + Vite grocery list application.

# Features
Persistent Data: Uses localStorage with lazy state initialization. Your list is automatically saved and remains available even after a page refresh.

Dynamic Search & Filtering: A dedicated search engine that filters through your items in real-time, switching views between the full list and search results seamlessly.

Complete Item Management (CRUD):

Add: Easily add new items with auto-generated IDs and empty-field validation.

Toggle Status: Mark items as "checked" or "unchecked" with a single click.

Delete & Clear: Remove individual items or clear the entire list with a "Clear All" function.

Component-Based Architecture: Separation of concerns across Header, AddItem, SearchItem, and GroceryList components for better maintainability.
# Tech Stack
Core: React 18 (Functional Components & Hooks)

State Management: useState with functional initializers and complex state synchronization.

Persistence: Browser JSON / LocalStorage API.

Styling: Modern CSS3 (Flexbox for responsive layout).