import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_DOGS = gql`
    query GetDogs {
        dogs {
            id
            breed
        }
    }
`;

const DogList = () => {
    const { loading, error, data } = useQuery(GET_DOGS);

    if (loading) return 'Loading';
    if (error) return `Error!: ${error.message}`;

    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Breed</th>
                </tr>
            </thead>
            <tbody>
                {data.dogs.map((dog) => (
                    <tr key={dog.id}>
                        <td>dog.id</td>
                        <td>dog.breed</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

};

export default DogList;

