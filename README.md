# Udacity's Feed Reade Project

This is a project for the Udacity Front-End Web Developer Nanodegree. The goal is learn how to create and use unit-tests to better understand red-green development.

The website should load with no errors. The tests are displayed at the end of the website.

Here is the link to the site https://duck84.github.io/feedReader/.

To open it locally: 
1. Download the repository.
2. Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.
3. Create a new localhost with python.

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```
4. Open a browser and visit localhost:8080
5. Run ngrok.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ./ngrok http 8080
  ```

6. Copy the public URL ngrok gives you and run that to have an online
