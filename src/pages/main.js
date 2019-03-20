import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../styles/styleMain';

// services
import api from "../services/api";

export default class Main extends Component {
    static navigationOptions = {
        title: "Main Page"
    };

    state = {
        productInfo: {},
        docs: [],
        page: 1
    };

    componentDidMount() {
        this.loadProducts();
    };

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);

        const { docs, ...productInfo } = response.data;

        // Update state, with same name.
        this.setState({ 
            docs: [...this.state.docs, ...docs], 
            productInfo,
            page
        });
    }; 

    loadMore = () => {
        const { page, productInfo } = this.state;

        if (page === productInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    };

    renderItem = ({ item }) => (
        <View style={styles.productContainer}>
            <Text style={styles.productTitle}>{ item.title }</Text>
            <Text style={styles.productDescription}>{ item.description }</Text>

            <TouchableOpacity style={styles.productButton} onPress={ () => {} }>
                <Text style={styles.productButtonText}>Acessar</Text>
            </TouchableOpacity>
        </View>
    );
    
    render(){
        return(
            <View style={styles.container}>
                <FlatList 
                contentContainerStyle={styles.list }
                data = { this.state.docs }
                keyExtractor = { item => item._id }
                renderItem = { this.renderItem }
                onEndReached={this.loadMore}
                onEndReachedThreshold={0.1}
                >
                </FlatList>
            </View>
        );
    };
}