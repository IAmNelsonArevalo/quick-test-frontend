import useConfig from "config";
import {FC, Suspense} from "react";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
/** Local Modules */
import useRouter from "routes";

const App: FC = (): JSX.Element => {
    /** Routes */
    const Router = useRouter();

    /** Config */
    const {useStoreSettings} = useConfig();
    const {store, persistent} = useStoreSettings();

    console.log(store.getState())

    return (
        <Provider store={store}>
            <PersistGate persistor={persistent} loading={null}>
                <Suspense fallback={<p>Loading...!</p>}>{Router}</Suspense>
            </PersistGate>
        </Provider>
    );
};

export default App;
