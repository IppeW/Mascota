import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Link } from 'react-router-native';

const Layout = ({ children }) => {
    return (
        <View style={styles.layout}>
            <View style={[styles.flexOne, styles.centeredContent]}>{children}</View>
            <View style={[styles.menu, styles.flexOne]}>
                <Link to="/" style={styles.menuItem}>
                    <Text>Home</Text>
                </Link>
                <Link to="/chiensListe" style={styles.menuItem}>
                    <Text>Les chiens</Text>
                </Link>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    menu: {
        maxHeight: 60,
        backgroundColor: '#6C715B',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    menuItem: {
        padding: 10,
        borderColor: '#F5F5F5',
        borderWidth: 1,
        borderRadius: 20,
    },
    flexOne: {
        flex: 1
    },
    centeredContent: {
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Layout