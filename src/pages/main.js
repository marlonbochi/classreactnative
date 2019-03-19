import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

// services
import api from "../services/api";

export default class Main extends Component {
    static navigationOptions = {
        title: "Main Page"
    };

    state = {
        docs: [],
    };

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get("/products");

        const { docs } = response.data;

        // Update state, with same name.
        this.setState({ docs });
    }

    renderItem = ({ item }) => (
        <View>
            <Text>{ item.title }</Text>
            <Text>{ item.description }</Text>
            <TouchableOpacity onPress={ () => {} }>
                <Text>Acessar</Text>
            </TouchableOpacity>
        </View>
    );
    
    render(){
        return(
            <FlatList 
            data = { this.state.docs }
            keyExtractor = { item => item._id }
            renderItem = { this.renderItem }
            >
            </FlatList>
        );
    }
}