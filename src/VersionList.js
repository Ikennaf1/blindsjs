import { useState } from 'react';

const VersionList = ({ defaultVersion }) => {

    const [url, setUrl] = useState(window.location.href);

    const handleVersionSelect = (e) => {
        setUrl(url.replace(/v[0-9]/, e.target.value));
        window.location.href = url;
    }

    return (
        <select className="w-full rounded p-2 bg-transparent border" defaultValue={ defaultVersion } onChange={(e) => handleVersionSelect(e)}>
            <option value="v0">v0</option>
        </select>
    );
}

export default VersionList;
