import { View, Text } from "react-native"

/* 
    fullName,
    description,
    language,
    stargazersCount,
    forksCount,
    ratingAverage,
*/
const RepositoryItem = (props) => {
    const { 
            fullName,
            description,
            language,
            stargazersCount,
            forksCount,
            reviewCount,
            ratingAverage } = props.data;

    return (
        <View >
            <Text>Full name: {fullName}</Text>
            <Text>Description: {description}</Text>
            <Text>Language: {language}</Text>
            <Text>Stars: {stargazersCount}</Text>
            <Text>Forks: {forksCount}</Text>
            <Text>Reviews: {reviewCount}</Text>
            <Text>Rating: {ratingAverage}</Text>
        </View>
    )
}

export default RepositoryItem;