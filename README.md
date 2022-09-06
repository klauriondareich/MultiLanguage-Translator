# Javascript Library for multi-language sites

Code written by K Laurion Dareich.
--Version : 1.0.0 released on 19/12/21:16:30

### TIPS TO USE THAT CODE IN A PROJECT

* Tip 1 : Run a web server and open your site or web app.

* Tip 2 : Create a directory called __languages__ at the root of your project.
* Tip 3 : Prepare your JSON files
   - Create JSON files where you will put your language contents
   - The name of the JSON file must start with the code of the language like __en.json__ for English, __fr.json__ for French ...
   - The structure of the JSON must be simple and single level : __key__:__value_ _
   - Use simple names for your keys

      Example of the JSON Structure : 

      **fr.json**
      
      ```
      {
        "fullname" : "Nom complet",
        "firstname" : "Prénom",
        "lastname" : "Nom",
        "birthday": "Anniversaire"
      }
      ```
      **en.json**
      
      ```
      {
        "fullname" : "Full name",
        "firstname" : "First name",
        "lastname" : "Last Name",
        "birthday": "birthday"
      }

* Tip 4 : Prepare your HTML page
    - Use __data-lang-content__ attribute on your html tags to translate their contents when the translation function is called
    - Use keys of your JSON content as values of the data-lang-content attributes
    
        Example of the Structure : 

        ```
            <div class="content">
              <span data-lang-content="fullname">Nom complet</span>
              <span data-lang-content="firstname">Prénom</span>
              <span data-lang-content="lastname">Nom</span>
              <span data-lang-content="birthday">Anniversaire</span>
            </div>
          ```
* Tip 5 : Prepare the call of the translation function
    - Use __data-lang-btn__ attribute on your html button tags on which the user will click to change the language of the site.
    - The value of the __data-lang-btn__ must be same as the code of the language

      Example of the Structure : 

      ```
      <button data-lang-btn="fr">Français</button>
        <button data-lang-btn="en">Anglais</button>
      ```

and the job is done ...


## WHAT THE CODE DOES?
When a user wants to switch the site in another language, they select the language. Behind an event is called, that event gets the code of the language passed in the button and call the json file to load. Data is loading by making an AJAX call. Once Data is loaded its passed to the html page. This is the main principal behind.
