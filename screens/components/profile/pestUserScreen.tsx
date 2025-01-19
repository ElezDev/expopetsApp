import React, { useRef, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Dimensions } from 'react-native';

const pets = [
    { id: '1', name: 'Buddy', image: 'https://findpestbackend-production.up.railway.app/storage/profile_image/edwin_ledezma_1737305814.jpg' },
    { id: '2', name: 'Max', image:  'https://findpestbackend-production.up.railway.app/storage/profile_image/edwin_ledezma_1737305814.jpg'  },
    { id: '3', name: 'Bella', image:  'https://findpestbackend-production.up.railway.app/storage/profile_image/edwin_ledezma_1737305814.jpg'  },
    { id: '4', name: 'Charlie', image:  'https://findpestbackend-production.up.railway.app/storage/profile_image/edwin_ledezma_1737305814.jpg' },
    { id: '5', name: 'Lucy', image:  'https://findpestbackend-production.up.railway.app/storage/profile_image/edwin_ledezma_1737305814.jpg'  },
];

const { width } = Dimensions.get('window');

const PetUserScreen = () => {
    const flatListRef = useRef<FlatList>(null);
    let scrollValue = 0;
    let scrolled = 0;

    useEffect(() => {
        const interval = setInterval(() => {
            scrolled++;
            if (scrolled < pets.length) {
                scrollValue = scrollValue + width;
            } else {
                scrollValue = 0;
                scrolled = 0;
            }
            flatListRef.current?.scrollToOffset({ animated: true, offset: scrollValue });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const renderItem = ({ item }: { item: { id: string; name: string; image: string } }) => (
        <View style={styles.petItem}>
            <Image source={{ uri: item.image }} style={styles.petImage} />
            <Text style={styles.petName}>{item.name}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={pets}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    petItem: {
        width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    petImage: {
        width: width * 0.8,
        height: width * 0.5,
        borderRadius: 10,
        marginBottom: 10,
    },
    petName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default PetUserScreen;