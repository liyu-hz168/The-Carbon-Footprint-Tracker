# The-Carbon-Footprint-Tracker

**To run this application, run npm install, then run npm run dev**

Features Implemented: 

1. Activity Logging: 

    - Users are able to add and delete activities. 
    - When logging activity, users can set a data, a designated activity type, and select from list of activities. The provide the required information for carbon foot print calculation. 
    - All of the user data and mock data are linked to the data and the todayData useState
    - When new day occurs, the todayData useState will be resetted. todayData useState will only hold data from the current day

2. Summary Views/Data Visualization 

    - Generated three graphs: Doughnut graph shows distribution of carbon footprint across all of the collected user data, Bar graph shows carbon footprint tracked across all months of the current year, Line graphs shows the tracked carbon footprint from the past 7 days including current date. 
    - Graphs will dynamically update when data or todayData useState changes

3. Goal setting 

    - User can set their own monthly carbon footprint goal
    - The goal will be tracked via a progress bar 
    - When user under 60% of their goal the bar will be green, under 75% the bar is yellow, under 95% the bar is orange. Once progress exceeds 95% the bar will turn red. Mr Incredibles face will also change as progress increases

4. Local Storage

    - Mock data and all user inputed data is stored in local storage
    - User setted goal is also stored in local storage
    - When application gets relaunched or reloaded memory should persist 

5. Resource library 

    - Clicking on the tree button on the bottom right of the application will route the user to a new page with information to learn more about climate change and carbon footprint
    - Mostly implemented this to learn about react routing

