import { View, Image, StyleSheet } from "react-native"
import { openBrowserAsync } from 'expo-web-browser';
import Text from "../Typography/Text";
import Tag from "../Typography/Tag";
import Button from '../Button'
import RepoStatus from "../RepositoryList/RepoStatus";
import Subheading from "../Typography/Subheading";
import ItemSeparator from "../ItemSeparator";

const styles = StyleSheet.create({
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 2,
    },
    flexContainer: {
        flexDirection: 'row',
        gap: 15,
        // margin: '0 5 10 5',
        marginTop: 0,
        marginRight: 5,
        marginBottom: 10,
        marginLeft: 5,
        padding: 5,
        // borderColor: "black",
        // borderStyle: 'solid',
        // borderWidth: 1
    },
    flexContainerRow: {
        flexDirection:'row'
    },
    flexItem: {
        flexGrow: 1,
    },
    marginBottom: {
        marginBottom: 10,
    }

}) 

const RepositoryInfo = ({ repository }) => {

    const { 
            fullName,
            description,
            language,
            stargazersCount,
            forksCount,
            reviewCount,
            ratingAverage,
            ownerAvatarUrl,
            url
        } = repository;

    const goToGithub = () => {
        openBrowserAsync(url);
    }
    return (
        <View testID="repositoryItem">
            <View style={styles.flexContainer}>
                <Image
                    style={styles.avatar}
                    source={{
                        uri: ownerAvatarUrl 
                    }}
                />
                <View style={styles.flexItem}>
                    <Subheading>
                        {fullName}
                    </Subheading>

                    <View style={styles.flexContainerRow}>
                        <Text style={{flex: 1}}> {description}</Text>
                    </View>
                    <Tag>{language}</Tag>

                </View>

            </View>
            
            <View style={styles.flexContainer}>
                <RepoStatus text='Stars: ' stat={stargazersCount} />
                <RepoStatus text='Forks: ' stat={forksCount}/>
                <RepoStatus text='Reviews: ' stat={reviewCount} />
                <RepoStatus text='Rating: ' stat={ratingAverage} />
            </View>
            <Button onPress={goToGithub}>
                Open in github
            </Button>

            {reviewCount !== 0 && <ItemSeparator/>}
            
        </View>
    )
}

export default RepositoryInfo;