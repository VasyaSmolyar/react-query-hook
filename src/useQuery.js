import { useState } from 'react';

const getValue = (id) => {
    let url = new URL(window.location.href);
    return url.searchParams.get(id);
};

const setValue = (id, value) => {
    if (getValue(id) === null || value.toString() !== getValue(id).toString()) {
        let url = new URL(window.location.href);
        url.searchParams.set(id, value);
        window.location.href = url.href;
    }
}

const useQuery = (name) => {
    const [query] = useState(getValue(name));

    const writeQuery = (value) => {
        setValue(name, value);
    };

    return [query, writeQuery];
}

export default useQuery;