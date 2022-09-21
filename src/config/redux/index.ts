import {configureStore} from "@reduxjs/toolkit";
import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";
/** Local Modules */
import useModels from "models";

const useStoreSettings = () => {
    /** Models */
    const {useReducers} = useModels();
    const reducers = useReducers();

    /** Variables */
    const persistentConfig = {
        key: "root",
        storage,
    };

    const persistReducers = persistReducer(persistentConfig, reducers);

    let store = configureStore({
        reducer: persistReducers,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({serializableCheck: false}),
        preloadedState: {},
    });

    let persistent = persistStore(store);

    return {
        persistent,
        store,
    };
};

export default useStoreSettings;
