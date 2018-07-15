import React, { Component, Fragment } from 'react';

import { Header, Footer } from './Components/Layouts';
import Exercises from './Components/Exercises';
import { muscles, exercises } from './store';

class App extends Component {
    state = {
        exercises,
        exercise: {}
    }

    getExercisesByMuscles = () => {
        const initialExercises = muscles.reduce(
            (exercises, category) => ({
                ...exercises,
                [category]: []
            }),
            {}
        );

        return Object.entries(
            this.state.exercises.reduce((exercises, exercise) => {
                const { muscles } = exercise;

                exercises[muscles] = [...exercises[muscles], exercise];
                
                return exercises;
            }, initialExercises)
        );
    }

    categorySelectedHandler = (category) =>
        this.setState({
            category: category
        })

    exerciseSelectedHandler = (id) =>
        this.setState((prevState) => ({
            exercise: prevState.exercises.find(ex => ex.id === id),
            editMode: false
        }))

    handleExerciseCreate = exercise =>
        this.setState(({ exercises }) => ({
            exercises: [ ...exercises, exercise ]
        }))

    handleExerciseDelete = id =>
        this.setState(({ exercises, exercise }) => ({
            exercises: exercises.filter(ex => ex.id !== id),
            editMode: false,
            exercise: exercise.id === id ? {} : exercise
        }))

    handleExerciseSelectEdit = id => {
        console.log('id', id);
        this.setState(({ exercises }) => {
            const exercise = exercises.find(ex => ex.id === id);

            console.log(exercise);

            return ({
                exercise: exercise,
                editMode: true
            })
        })
    }

    handleExerciseEdit = exercise =>
        this.setState(({ exercises }) => ({
            exercises: [
                ...exercises.filter(ex => ex.id !== exercise.id),
                exercise
            ]
        }))

    render() {
        const exercises = this.getExercisesByMuscles(),
            { category, exercise, editMode } = this.state;

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
                    muscles={muscles}
                    editMode={editMode}
                    onSelect={this.exerciseSelectedHandler}
                    onDelete={this.handleExerciseDelete}
                    onSelectEdit={this.handleExerciseSelectEdit}
                    onEdit={this.handleExerciseEdit}
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
