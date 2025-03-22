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




For this assignment, you have the flexibility to choose any 5 of the following 10 features to implement:

Activity Logging: Create a feature that allows users to log daily activities, categorizing them by type. Each activity will have an associated carbon value, helping users understand their environmental impact.

Summary Views: Design a dashboard that provides a visual summary of the user's carbon footprint over time, using charts or graphs to illustrate trends.

Goal Setting: Implement a goal-setting feature where users can set personal targets for reducing their carbon footprint, with progress tracking and motivational feedback.

Notifications: Add optional notifications to remind users to log activities, helping them stay consistent in their tracking.

Resource Library: Develop a section with practical tips and resources for sustainable living, encouraging users to adopt eco-friendly habits.

Achievements: Introduce gamification by creating achievements for reaching milestones, making the experience engaging and rewarding.

Local Storage: Ensure that all data is stored locally in the browser, maintaining user privacy and enabling offline access.

Customizable UI: Allow users to personalize the app’s interface, making it visually appealing and user-friendly.

Data Visualization: Design interactive charts and graphs to help users visualize their carbon footprint and identify areas for improvement.

User Profiles: Implement a profile feature that allows users to track their progress and personalize their experience.

Choose any combination of these features to complete the assignment while demonstrating your understanding of React!

Note: you do not need to have the application fully functional in all aspects. The goal is to complete just 5 features. You are welcome to complete additional features to further your grasp of a scalable front-end framework such as React.





