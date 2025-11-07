# Personalized-Music-Therapy-Recommendation-System-Rajendra-Arpith-Chinnaswamy-4252081-PCS-P1-S

# Abstract

My project, the Personalized Music Therapy Recommendation System, focuses on using artificial intelligence to create personalized playlists that help users relax, focus, or lift their mood. During this phase, I worked on designing and developing the front-end interface of the application. The system allows users to select their current mood and receive suitable track suggestions. Data on user mood is collected through simple self-reported input and short feedback after each session. The front end was implemented using HTML, CSS, and Flask. The next stage will focus on connecting the interface to the machine-learning model that classifies songs by mood using features such as tempo, rhythm, and energy. This phase helped me understand how AI and user experience come together to make digital music therapy more personal and engaging.


# Expected Output

A working web interface that allows users to select moods and receive personalized track suggestions.

A feedback system that records user responses to improve future recommendations.

Future versions will include a trained machine learning model for automatic emotion-based music recommendations.

Demonstration video and screenshots showing system functionality.


# Technology Stack

| Component           | Technology                                                    |
| ------------------- | ------------------------------------------------------------- |
| **Frontend**        | HTML, CSS, JavaScript, Flask                                  |
| **Backend**         | Python (Flask Framework)                                      |
| **AI / ML**         | Librosa, scikit-learn, TensorFlow (for future implementation) |
| **Database**        | CSV (for prototype), SQLite / MongoDB (future phase)          |
| **Version Control** | Git, GitHub                                                   |


# Goals and Requirements

# Project Goals:

  To build a web-based system that recommends therapeutic music based on mood.

  To improve emotional well-being and relaxation through personalized listening.

  To integrate AI techniques for mood detection and adaptive playlist generation.

# Functional Requirements:

  User can select their current mood.

  The system provides corresponding song recommendations.

  Users can give feedback (👍 or 👎) after listening.

  The system stores feedback for future learning.

# Non-Functional Requirements:

  Simple and responsive web interface.

  Fast and reliable data access.

  Easy integration with the ML backend.



# Risks and Mitigation

| Risk                        | Description                                                       | Mitigation                                                   |
| --------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------ |
| **Limited dataset**         | Lack of diverse therapeutic music data may reduce model accuracy. | Collect open-source datasets and manually label moods.       |
| **Audio processing errors** | Feature extraction may fail for certain audio formats.            | Standardize all files to .wav format and pre-process them.   |
| **Integration delays**      | Connecting the UI and ML model could take longer than expected.   | Modular design allows independent development and testing.   |
| **User feedback quality**   | Inaccurate mood reporting may affect recommendation accuracy.     | Use multiple user sessions to balance feedback influence.    |

