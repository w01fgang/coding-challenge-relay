import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Box from '@material-ui/core/Box';
import { useState } from 'react';
import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from 'react-relay';
import { add } from '../api/products';

const AddProduct = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [nameErrorText, setNameErrorText] = useState('');
  const [descriptionErrorText, setDescriptionErrorText] = useState('');
  const [priceErrorText, setPriceErrorText] = useState('');
  let priceRegex = new RegExp(/^\$(\d{1, 3}(\, \d{3})*|(\d+))(\.\d{2})?$/);
  // const [commitMutation, isMutationInFlight] = useMutation(AddProductMutation);
  const handleSubmit = (event) => {
    event.preventDefault();
    // commitMutation({
    //   variables: {
    //     name,
    //     description,
    //     price,
    //   },
    // });

    if (!name) {
      setNameErrorText('Please enter name');
    }
    if (!description) {
      setDescriptionErrorText('Please enter description');
    }
    if (!priceRegex.test(price)) {
      setPriceErrorText('Please enter valid price');
    }

    console.log(name, description, price);
    
    router.push('/');
  };

  return (
    <>
      <Button
        href='/'
        variant='contained'
        style={{
          marginBottom: '20px',
          color: '#fff',
          borderRadius: '10px',
          background: 'rgb(57 101 125)',
        }}
      >
        Back
      </Button>
      <Box
        onSubmit={handleSubmit}
        component='form'
        sx={{
          display: 'flex',
          height: 'auto',
          maxWidth: '500px',
          padding: '20px',
          margin: '0 auto',
          flexDirection: 'column',
          background: 'rgb(89 131 154)',
          borderRadius: '20px',
        }}
        noValidate
        autoComplete='off'
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            margin: '0 auto',
          }}
        >
          <FormControl variant='standard'>
            <InputLabel
              label='Name'
              htmlFor='name'
              style={{
                color: '#fff',
              }}
            >
              Name
            </InputLabel>
            <Input
              style={{
                width: '270px',
                color: '#fff',
              }}
              id='name'
              value={name}
              required
              error={name.length === 0 && !!nameErrorText}
              onChange={(event) => {
                setName(event.target.value);
              }}
              aria-describedby='name'
            />
            <FormHelperText
              style={{ color: 'rgb(255 0 0)' }}
              id='nameErrorText'
            >
              {name.length === 0 && nameErrorText}
            </FormHelperText>
          </FormControl>
          <FormControl>
            <InputLabel
              label='Description'
              htmlFor='description'
              style={{
                color: '#fff',
              }}
            >
              Description
            </InputLabel>
            <Input
              style={{
                width: '270px',
                color: '#fff',
              }}
              id='description'
              value={description}
              required
              error={description.length === 0 && !!descriptionErrorText}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
              aria-describedby='description'
            />
            <FormHelperText
              style={{ color: 'rgb(255 0 0)' }}
              id='descriptionErrorText'
            >
              {description.length === 0 && descriptionErrorText}
            </FormHelperText>
          </FormControl>
          <FormControl>
            <InputLabel
              htmlFor='price'
              error
              label='Price'
              style={{
                color: '#fff',
              }}
            >
              Price
            </InputLabel>
            <Input
              style={{
                color: '#fff',
                width: '270px',
              }}
              id='price'
              value={price}
              required
              error={
                price.length === 0
                  ? !!priceErrorText
                  : !priceRegex.test(price)
                  ? !!priceErrorText
                  : null
              }
              onChange={(event) => {
                setPrice(event.target.value);
              }}
              aria-describedby='price'
            />
            <FormHelperText
              style={{ color: 'rgb(255 0 0)' }}
              id='priceErrorText'
            >
              {price.length === 0
                ? priceErrorText
                : !priceRegex.test(price)
                ? priceErrorText
                : null}
            </FormHelperText>
          </FormControl>
        </div>

        <Button
          type='submit'
          style={{
            marginTop: '20px',
            width: '100px',
            alignSelf: 'end',
            fontWeight: '600',
            background: '#baefff',
          }}
        >
          Add
        </Button>
      </Box>
    </>
  );
};

const AddProductMutation = graphql`
  mutation create_productMutation(
    $name: String!
    $description: String!
    $price: Float!
  ) {
    createProduct(
      input: { name: $name, description: $description, price: $price }
    ) {
      name
      description
      price
    }
  }
`;

export default AddProduct;
