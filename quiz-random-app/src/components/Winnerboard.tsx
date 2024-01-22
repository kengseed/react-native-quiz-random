import React from "react";
import Leaderboard from "react-native-leaderboard";
import UserScore from "../models/userScore.model";

const leaderData = [
    { userName: 'Admin', score: 20, icon: "https://cdn.dribbble.com/users/223408/screenshots/2134810/me-dribbble-size-001-001_1x.png" }
]

const Winnerboard: React.FC<UserScore> = ({
    userName,
    score
}) => {
    //Push new user to done all questions to leaderboard
    if (userName.trim().length > 0) {
        leaderData.push({ userName: userName, score: score, icon: "https://cdn.dribbble.com/users/223408/screenshots/2134810/me-dribbble-size-001-001_1x.png" });
    }

    const props = {
        labelBy: 'userName',
        sortBy: 'score',
        data: leaderData,
        icon: 'icon'
    }

    return (
        <Leaderboard {...props} />
    );
};

export default Winnerboard;