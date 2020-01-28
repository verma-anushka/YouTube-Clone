# YouTube Clone
A clone of the popular video hosting and viewing site, YouTube.  
This web application is developed using React and the YouTube Data API v3. It enables the user to search for videos, watch videos and see the comments for the videos. The goal of this project was to clone YouTube as closely and as accurately as possible.

## Demo Link
https://youtube-clone-project.herokuapp.com/

## Installation
This application loads information using the Youtube Data API v3.
To use it, you need to set up a Youtube Data v3 API key and run the project with npm or yarn.

### Cloning the application
- clone the repository by running the command: `$ git clone https://github.com/verma-anushka/YouTube-Clone.git`
- Navigate into the directory: `$ cd YouTube-Clone/`
- On the top level directory, create a file called '.env'

### Getting a Youtube Data API key
- Head over to [Google Developers Console](http://console.developers.google.com/)
- Create a new project by clicking on the **'Select Project'** drop down right next to the logo. 
- Click the **'New Project'** button and give it a suitable name.
- Select your project by choosing it in the Select Dropdown directly next to the logo in the header.
- Click the **'Enable APIs and Services'** button.
- Search for youtube data and select the **'Youtube Data API v3'**.
- Click the **'enable'** button.
- Navigate to the dashboard and select the **'Credentials'** tab from the left sidebar.
- Click on the **'Create Credentials'** button
- Some important information:
    - Which API are you using: **Youtube Data API v3**
    - Where will you be calling the API from: **Web browser**
    - What data are you accessing: **Public data**
- Click on the 'What credentials do I need' button.
    - Copy the API key, and paste it into the .env file.
    - const API_KEY = 'AIzaxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';

If you are stuck, you can refer to the [official documentation](https://developers.google.com/youtube/v3/getting-started).
    
### Installing the dependencies
Install the dependencies by running the command: `$ npm install`  
If you are using yarn, use the command: `$ yarn install`

### Running the application
To run the application, execute the command: `$ npm start`  
If you are using yarn, use the command: `$ yarn start`

## Contributing
- Clone the repository.
- Create a new branch.
- Commit and push your changes.
- Create a pull request.
