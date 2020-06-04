import React, { useState } from 'react';
import {
  Grommet,
  Box,
  Heading,
  Table,
  TableCell,
  TableBody,
  TableRow,
  TextInput,
} from 'grommet';
const TeX = require('@matejmazur/react-katex');

const App: React.FC = () => {
  const [g, setG] = useState(627);
  const [p, setP] = useState(941);
  const [a, setA] = useState(347);
  const [b, setB] = useState(781);

  const space = ' \\; ';
  const equals = `${space} = ${space}`;
  const modulus = '\\bmod';
  const prime = '\\prime';

  const A = BigInt(BigInt(g) ** BigInt(a) % BigInt(p));
  const B = BigInt(BigInt(g) ** BigInt(b) % BigInt(p));
  const APrime = BigInt(B ** BigInt(a) % BigInt(p));
  const BPrime = BigInt(A ** BigInt(b) % BigInt(p));

  const symbolicExpressionA = `g^a ${modulus} p`;
  const symbolicExpressionB = `g^b ${modulus} p`;
  const symbolicExpressionAPrime = `B^a ${modulus} p`;
  const symbolicExpressionBPrime = `A^b ${modulus} p`;

  const numericExpressionA = `${g}^{${a}} ${modulus} ${p}`;
  const numericExpressionB = `${g}^{${b}} ${modulus} ${p}`;
  const numericExpressionAPrime = `${B}^{${a}} ${modulus} ${p}`;
  const numericExpressionBPrime = `${A}^{${b}} ${modulus} ${p}`;

  const expressionA =
    'A' +
    equals +
    symbolicExpressionA +
    equals +
    numericExpressionA +
    equals +
    A;

  const expressionB =
    'B' +
    equals +
    symbolicExpressionB +
    equals +
    numericExpressionB +
    equals +
    B;

  const expressionAPrime =
    `A^${prime}` +
    equals +
    symbolicExpressionAPrime +
    equals +
    numericExpressionAPrime +
    equals +
    APrime;

  const expressionBPrime =
    `B^${prime}` +
    equals +
    symbolicExpressionBPrime +
    equals +
    numericExpressionBPrime +
    equals +
    BPrime;

  const equalityExpression =
    `A^${prime}` + equals + `B^${prime}` + equals + APrime;

  return (
    <Grommet full={true}>
      <Box align="center" margin="small">
        <Heading level="2" margin="small">
          Diffie–Hellman
        </Heading>

        <Heading level="4" margin="small">
          Key Exchange Algorithm
        </Heading>
      </Box>

      <Box margin="medium">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell border="all">
                <TeX>g</TeX>
              </TableCell>

              <TableCell border="all">
                <TextInput
                  type="number"
                  plain={true}
                  value={g}
                  onChange={(event) => {
                    const value = Number(event.target.value);
                    setG(Math.max(value, 0));
                  }}
                />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell border="all">
                <TeX>p</TeX>
              </TableCell>

              <TableCell border="all">
                <TextInput
                  type="number"
                  plain={true}
                  value={p}
                  onChange={(event) => {
                    const value = Number(event.target.value);
                    setP(Math.max(value, 1));
                  }}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>

      <Box direction="row">
        <Box fill={true} margin="medium" pad="small" border="all">
          <Heading level="5" margin={{ top: 'xsmall', bottom: 'small' }}>
            Alice
          </Heading>

          <Box margin={{ top: 'small', bottom: 'medium' }}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell border="all">
                    <TeX>a</TeX>
                  </TableCell>

                  <TableCell border="all">
                    <TextInput
                      type="number"
                      plain={true}
                      value={a}
                      onChange={(event) => {
                        const value = Number(event.target.value);
                        setA(Math.max(value, 0));
                      }}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>

          <Box margin={{ vertical: 'xxsmall' }}>
            <TeX>{expressionA}</TeX>
          </Box>

          <Box margin={{ vertical: 'xxsmall' }}>
            <TeX>{expressionAPrime}</TeX>
          </Box>
        </Box>

        <Box fill={true} margin="medium" pad="small" border="all">
          <Heading level="5" margin={{ top: 'xsmall', bottom: 'small' }}>
            Bob
          </Heading>

          <Box margin={{ top: 'small', bottom: 'medium' }}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell border="all">
                    <TeX>b</TeX>
                  </TableCell>

                  <TableCell border="all">
                    <TextInput
                      type="number"
                      plain={true}
                      value={b}
                      onChange={(event) => {
                        const value = Number(event.target.value);
                        setB(Math.max(value, 0));
                      }}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>

          <Box margin={{ vertical: 'xxsmall' }}>
            <TeX>{expressionB}</TeX>
          </Box>

          <Box margin={{ vertical: 'xxsmall' }}>
            <TeX>{expressionBPrime}</TeX>
          </Box>
        </Box>
      </Box>

      <TeX block={true}>{equalityExpression}</TeX>
    </Grommet>
  );
};

export default App;
