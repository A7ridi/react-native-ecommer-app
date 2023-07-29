import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchView from "../../components/common/search/Search";

const Search = () => {
  return (
    <SafeAreaView>
      <SearchView />
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({});
