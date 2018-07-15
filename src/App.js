import React, { Component, Fragment } from 'react';

import { Header, Footer } from './Components/Layouts';
import Exercises from './Components/Exercises';
import { muscles, exercises } from './store';

class App extends Component {
    state = {
        exercises,
        category: '',
        exercise: {}
    }

    getExercisesByMuscles = () => {
        const initialExercises = muscles.reduce((exercises, category) => ({
            ...exercises,
            [category]: []
        }), {});

        console.log(muscles, initialExercises);

        return Object.entries(
            this.state.exercises.reduce((exercises, exercise) => {
                const { muscles } = exercise;

                exercises[muscles] = [...exercises[muscles], exercise];
                
                return exercises;
            }, initialExercises)
        );
    }

    categorySelectedHandler = (category) => {
        this.setState({
            category: category
        })
    }

    exerciseSelectedHandler = (id) => {
        this.setState((prevState) => ({
            exercise: prevState.exercises.find(ex => ex.id === id)
        }))
    }

    handleExerciseCreate = exercise => {
        this.setState(({ exercises }) => ({
            exercises: [
                ...exercises,
                exercise
            ]
        }))
    }

    handleExerciseDelete = id => {
        this.setState(({ exercises }) => ({
            exercises: exercises.filter(ex => ex.id !== id)
        }))
    }

    render() {
        const exercises = this.getExercisesByMuscles(),
            category = this.state.category,
            exercise = this.state.exercise;
        return (
            <Fragment>
                <Header
                    muscles={muscles}
                    onExerciseCreate={this.handleExerciseCreate}
                />

                <Exercises
                    exercise={exercise}
                    category={category}
                    exercises={exercises}
                    onSelect={this.exerciseSelectedHandler}
                    onDelete={this.handleExerciseDelete}
                />

                <Footer
                    category={category}
                    muscles={muscles}
                    onSelect={this.categorySelectedHandler}
                />
            </Fragment>
        );
    }
}

export default App;
