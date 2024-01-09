# UI-Components

This repository contains usefull UI Components used for Web Development build using `HTML`, `TailWind CSS`.

To use these components, download the desired folder, and install Tailwind CSS into your system.

### Steps to install Tailwind CSS: 

1. #### Install `tailwindcss` via npx (make sure **node** is installed)

    ```
    npx tailwindcss init
    ```

1. #### Configure your template paths
   
    Add the paths to all of your template files in your **tailwind.config.js** file.

        /** @type {import('tailwindcss').Config} */
            module.exports = {
            content: ["./**/*.{html,js}"],
            theme: {
                extend: {},
                },
            plugins: [],
            }
        
1. #### Create a Folder name **'src'** and inside it, a css file named **'input.css'**.

1. #### Add the Tailwind directives to your **'input.css'** file.

        @tailwind base;
        @tailwind components;
        @tailwind utilities;

1. #### Start the Tailwind CLI build process

    Run the below command in your CLI tool.

    **./src/input.css** -> path to input.css file

    **./path/to/your/style.css** -> path to your main style.css file (look at downloaded folder structure)

    ```
    npx tailwindcss -i ./src/input.css -o ./path/to/your/style.css --watch
    ```