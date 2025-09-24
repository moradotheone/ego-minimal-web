# Project Blueprint

## Overview

This is a React application that guides a user through a journey of self-discovery. It starts with a welcome screen, collects their birth information, and then presents a personalized dashboard where they can explore different aspects of their inner world. The user's information is stored in the browser's local storage to persist between sessions.

## Project Outline

### 1. Welcome Screen

*   **Component:** `Welcome.tsx`
*   **Styling:** `Welcome.css`
*   **Functionality:** Displays a visually appealing welcome message (`E•G•O`, `Esencia. Guía. Origen.`) and a button to begin the process.
*   **Design:** Minimalist design with a centered layout, custom font (`Onest`), and a clean, modern aesthetic.

### 2. User Information Form

*   **Component:** `UserInfoForm.tsx`
*   **Styling:** `UserInfoForm.css`
*   **Functionality:**
    *   Collects the user's full name, year of birth, hour of birth, place of birth, and email address.
    *   Saves the form data as a JSON object to the browser's local storage under the key `userInfo`.
*   **Design:** A clean, centered form with modern input styling to guide the user.

### 3. Dashboard (Greeting) Screen

*   **Component:** `Greeting.tsx`
*   **Styling:** `Greeting.css`
*   **Functionality:**
    *   Retrieves the user's data from local storage.
    *   Displays a personalized greeting.
    *   Presents a menu of three options for the user to explore: "Mi Carta", "Mi Rueda de la Vida", and "Mi Viaje del Héroe".
    *   Shows a summary of the user's submitted information.
    *   Includes a button to clear the data and restart the journey.
*   **Design:** A modern, card-based dashboard layout that is both visually appealing and intuitive to navigate.

### 4. Placeholder Sections

*   **Components:** `MyChart.tsx`, `MyWheelOfLife.tsx`, `MyHeroJourney.tsx`
*   **Styling:** `Placeholder.css`
*   **Functionality:** Each component currently serves as a placeholder, displaying a title and a "Back" button to return to the dashboard. They are ready to be built out with specific features.
*   **Design:** A simple, centered layout consistent with the rest of the application.

### Routing

*   **Library:** `react-router-dom`
*   **Routes:**
    *   `/`: Displays the `Welcome` component.
    *   `/form`: Displays the `UserInfoForm` component.
    *   `/greeting`: Displays the `Greeting` (Dashboard) component.
    *   `/chart`: Displays the `MyChart` component.
    *   `/wheel`: Displays the `MyWheelOfLife` component.
    *   `/hero-journey`: Displays the `MyHeroJourney` component.

## Current Plan

1.  **DONE:** Set up initial routing with `react-router-dom`.
2.  **DONE:** Create the `UserInfoForm` component and implement local storage saving.
3.  **DONE:** Create the `Greeting` screen to display user data.
4.  **DONE:** Transform the `Greeting` screen into a dashboard with a navigation menu.
5.  **DONE:** Create placeholder components and routes for "Mi Carta", "Mi Rueda de la Vida", and "Mi Viaje del Héroe".
6.  **DONE:** Create and maintain this `blueprint.md` file.
