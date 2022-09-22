import useHelpers from "helpers";

const useTableSelectors = () => {
    /** Helpers */
    const {useCreateSelector} = useHelpers();
    const {createSelector} = useCreateSelector();

    /** Selectors */
    const tableSelector = createSelector(
        (state: any) => state.tableData,
        (tableData: any) => tableData.data
    );

    return {
        tableSelector,
    };
};

export default useTableSelectors;
