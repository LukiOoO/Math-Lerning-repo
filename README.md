# Math Learning

Simple app for learning math using react and django rest api

## How to run

1. Clone repo git-clone https://github.com/LukiOoO/Math-Lerning-repo.git

2. in Mysql Server Create a database named math_learning and import the data from the file math_learning_database.sql into it

3. In the dev.py file located at math_lerning_backend > math_lerning_backend > settings > dev.py in DATABASES, replace haslo123 with your Mysql server password provided at setup.

DATABASES = {
'default': {
'ENGINE': 'django.db.backends.mysql',
'NAME': 'math_learning',
'HOST': 'localhost',
'USER': 'root',
'PASSWORD': 'Your Password'
}
}

4. Install python in extensions in visual studio code

5. Install python 3.10 on your computer when installing, check add path to python

6. Install pipenv by typing pip install pipenv in cmd

7. in the visual studio code terminal, go to Your Location \Math-Lerning-repo\math_lerning_backend and type pipenv install

8. in the visual studio code terminal, in Your Location \Math-Lerning-repo\math_lerning_backend, type pipenv install django-cors-headers

9. By clicking Ctrl + shift + p, open the commend palette and type Python: Select Interpreter and select the pip environment created step above

10. to run server backend type in visual studio terminal code in Your Location \Math-Lerning-repo\math_lerning_backend

pipenv shell
python manage.py runserver

If everything ran successfully you should get something like this

    System check identified no issues (0 silenced).
    March 05, 2023 - 17:00:24
    Django version 4.1.7, using settings 'math_lerning_backend.settings.dev'
    Starting development server at http://127.0.0.1:8000/
    Quit the server with CTRL-BREAK.

11. Install Node.js on Your Computer

12. without closing the previously opened termianl, open a new terminal and go to the location of your LocalizationMath-Lerning-repo\math_learning_frontend>.  
    make sure you haven't opened a terminal with pipenv enabled if you have, type deactivate And type npm and
13. to start the server frontend type npm start and you should open a window with a properly working application
