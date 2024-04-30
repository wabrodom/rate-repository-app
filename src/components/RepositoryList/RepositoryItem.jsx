import { View, Image, StyleSheet, Pressable } from "react-native"
import Text from "../Typography/Text";
import Tag from "../Typography/Tag";
import RepoStatus from "./RepoStatus";
import Subheading from "../Typography/Subheading";
import { useNavigate } from "react-router-native";
import theme from "../../theme";


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
    }

}) 

const RepositoryItem = (props) => {
    const { 
            id,
            fullName,
            description,
            language,
            stargazersCount,
            forksCount,
            reviewCount,
            ratingAverage,
            ownerAvatarUrl
        } = props.data;

    const navigate = useNavigate();

    const handlePress = () => {
        navigate(`/repo/${id}`)
    }    

    return (
        <View testID="repositoryItem">
            <View style={theme.flexContainer}>
                <Pressable onPress={handlePress}>
                    <Image
                        style={styles.avatar}
                        source={{
                            uri: ownerAvatarUrl 
                        }}
                    />

                </Pressable>
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

        </View>
    )
}

export default RepositoryItem;