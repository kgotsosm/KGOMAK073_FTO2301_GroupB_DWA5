const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

/**
 * This script adds functionality to a form submit event listener.
 * It performs division based on user input and handles specific conditions.
 */

/**
 * Event listener for form submission.
 * Performs division based on user input and handles specific conditions.
 *
 * @param {Event} event - The form submission event.
 */
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const entries = new FormData(event.target);

    if (entries.get("dividend") === "" || entries.get("divider") === "") {
        result.innerText = "Division not performed. Both values are required in inputs. Try again.";
    }
    else if (entries.get("divider") <= 0) {
        result.innerText = "Division not performed. Invalid number provided. Try again.";
        console.error("Division not performed. Invalid number provided. Try again.", new Error().stack);
    }

    else if (isNaN(entries.get("dividend")) || isNaN(entries.get("divider"))) {
        document.body.innerHTML = "Something critical went wrong. Please reload the page";
        console.error("Something critical went wrong.", new Error().stack);
    }

    else {
        const {dividend, divider} = Object.fromEntries(entries);
        result.innerText = Math.floor(dividend / divider);
    }
});
