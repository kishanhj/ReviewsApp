import React from 'react';
import {   TextInput, View, Keyboard, TouchableWithoutFeedback, Text } from 'react-native';
import { globalStyles } from '../shared/globalCSS';
import { Formik } from 'formik';
import * as yup from 'yup';
import Button from '../shared/Button'

const reviewSchema = yup.object({
  title : yup.string()
          .required()
          .min(4),
  body :  yup.string()
          .required()
          .min(8),
  rating: yup.string()
          .required()
          .test('isNum1-5','Rating must be a number 1 -5', 
          (val) => parseInt(val) < 6 && parseInt(val) > 0)
})

export default function ReviewForm({addReview}) {

  return (
    
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        validationSchema = {reviewSchema}
        onSubmit={(values,actions) => {
          addReview(values);
        }}
      >
        {props => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder='Review title'
              onChangeText={props.handleChange('title')}
              value={props.values.title}
              onBlur = {props.handleBlur('title')}
            />

            <Text style={globalStyles.error}> {props.touched.title && props.errors.title} </Text>
            <TextInput
              style={globalStyles.input}
              multiline
              placeholder='Review details'
              onChangeText={props.handleChange('body')}
              value={props.values.body}
              onBlur = {props.handleBlur('body')}
            />
            <Text style={globalStyles.error}> {props.touched.body && props.errors.body} </Text>
            <TextInput 
              style={globalStyles.input}
              placeholder='Rating (1 - 5)'
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              keyboardType='numeric'
              onBlur = {props.handleBlur('rating')}
            />
            <Text style={globalStyles.error}> {props.touched.rating && props.errors.rating} </Text>
            <Button  title="submit" clickHandler={props.handleSubmit} /> 
          </View>
        )}
      </Formik>
    </View>
    </TouchableWithoutFeedback>
    
  );
}