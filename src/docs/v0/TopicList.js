import VersionList from '../../VersionList';
import topics from './topics.json';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const TopicList = () => {

    const [allTopics, setAllTopics] = useState(Object.entries(topics));

    return (
        <div className="topic-list-main">
            <VersionList />
            <ul id="topic_list_main">
            {
                allTopics.map((topic, i) => 
                    <li key={i}>
                        <NavLink to={`/docs/${topic[1]}`} className="topic-list-items-main">{topic[0]}</NavLink>
                    </li>
                )
            }
            </ul>
        </div>
    );
}

export default TopicList;
