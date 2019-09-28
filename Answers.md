1. What problem does the context API help solve?

    -Context api solves the props drilling problem, if you want to pass data through many layers context is designed to be the global storage for props.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    -action: are pretty much a  way to create templates for specific functions.
    -store: holds the whole state tree of the application.
    -reducers: decides based on the action what state to render without mutating the original stats
    

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    -application state is something you can access throughout the whole app(they are like states that can be used in multiple componnents) while component state is a state specific to one sing component

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    -thunk is middleware that allows the developer to have more control over the dispatch function like only dispatch if certain conditions are met

1. What is your favorite state management system you've learned and this sprint? Please explain why!
    I like redux it was hard at first but once I have understand what is doing it makes everything really easy to build.