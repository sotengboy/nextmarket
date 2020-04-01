export const setFilter = (filter) => ({
    type: "SET_FILTER",
    filter
});
export const getFilter = () => ({
    type: "GET_FILTER"
});

export const VisibilityFilters = {
    SHOW_ALL: "all",
    SHOW_BARU: "baru",
    SHOW_REKONDISI: "rekondisi",
};

export const categories = [
    {
        value: 'baru',
        name: 'Mesin Fotocopy Baru',
    },
    {
        value: 'rekondisi',
        name: 'Mesin Fotocopy Rekondisi',
    }
];