# CMS Payload 3 with Next.js Application
This project demonstrates the integration of CMS Payload 3 with a Next.js application. The application fetches and displays content managed by Payload CMS, showcasing a simple homepage layout with a header, main content, and footer.

## Technologies Used
- TypeScript: For type safety and better development experience.
- Next.js: For server-side rendering and static site generation.
- Payload CMS: As the content management system.

## Project Structure
- `pages/`: Contains the Next.js page components.
- `src/modules/`: Contains the React components and modules used in the application.
- `.gitignore`: Specifies files and directories to be ignored by Git.

## Key Components
### Home Page
The home page is rendered using the `HomePageServer` component, which fetches data from Payload CMS and passes it to the `HomePage` component.

## Getting Started
### Prerequisites
- Node.js
- npm

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/VladimirDegt/CMS-Payload.git
    ```
2. Install the dependencies:
```sh
   npm install
   ```
3. Run the development server:
   ```sh
    npm run dev
    ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

5. Open [http://localhost:3000/admin](http://localhost:3000/admin) in your browser to access the Payload CMS admin panel.