import { types } from 'mobx-state-tree';
import { createContext, useContext } from 'react';

const Todo = types
  .model({
    name: types.optional(types.string, ''),
    done: types.optional(types.boolean, false),
  })
  .actions(self => ({
    setName(newName) {
      self.name = newName;
    },

    toggle() {
      self.done = !self.done;
    },
  }));

const User = types.model({
  name: types.optional(types.string, ''),
});

const RootStore = types
  .model({
    user: User,
    todos: types.map(Todo),
  })
  .actions(self => ({
    addTodo(id, name) {
      self.todos.set(id, Todo.create({ name }));
    },
  }));

export const rootStore = RootStore.create({
  user: { name: 'toto' },
});

const StoreContext = createContext(rootStore);
export const StoreProvider = StoreContext.Provider;

export const useStore = mapStateToProps => {
  const store = useContext(StoreContext);

  if (typeof mapStateToProps !== 'undefined') {
    return mapStateToProps(store);
  }

  return store;
};
