import React from 'react';

// Styles
import {
  Typography1,
  Typography2,
  Typography3,
  Typography4,
  Typography5,
  Typography6,
  Typography7,
  Typography8,
  Typography9,
  Typography10,
  Typography11,
  Typography12,
  Typography13,
  Typography14,
} from 'components/common/Samples/styled';
import { Table } from 'components/common/Table/styled';

const TypographyTable = () => (
  <Table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Weight</th>
        <th>Size</th>
        <th>Line height</th>
        <th>Sample</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>32px / Bold</td>
        <td>Bold</td>
        <td>32px</td>
        <td>36px</td>
        <td>
          <Typography1>
            The quick brown fox jumps over the lazy dog
          </Typography1>
        </td>
      </tr>
      <tr>
        <td>32px / SemiBold</td>
        <td>Medium</td>
        <td>32px</td>
        <td>36px</td>
        <td>
          <Typography2>
            The quick brown fox jumps over the lazy dog
          </Typography2>
        </td>
      </tr>
      <tr>
        <td>24px / Medium</td>
        <td>Regular</td>
        <td>24px</td>
        <td>28px</td>
        <td>
          <Typography3>
            The quick brown fox jumps over the lazy dog
          </Typography3>
        </td>
      </tr>
      <tr>
        <td>22px / SemiBold</td>
        <td>Medium</td>
        <td>22px</td>
        <td>24px</td>
        <td>
          <Typography4>
            The quick brown fox jumps over the lazy dog
          </Typography4>
        </td>
      </tr>
      <tr>
        <td>20px / Medium</td>
        <td>Medium</td>
        <td>20px</td>
        <td>22px</td>
        <td>
          <Typography5>
            The quick brown fox jumps over the lazy dog
          </Typography5>
        </td>
      </tr>
      <tr>
        <td>18px / Light</td>
        <td>Regular</td>
        <td>18px</td>
        <td>22px</td>
        <td>
          <Typography6>
            The quick brown fox jumps over the lazy dog
          </Typography6>
        </td>
      </tr>
      <tr>
        <td>16px / Regular</td>
        <td>Bold</td>
        <td>16px</td>
        <td>24px</td>
        <td>
          <Typography7>
            The quick brown fox jumps over the lazy dog
          </Typography7>
        </td>
      </tr>
      <tr>
        <td>16px / SemiBold</td>
        <td>Medium</td>
        <td>16px</td>
        <td>20px</td>
        <td>
          <Typography8>
            The quick brown fox jumps over the lazy dog
          </Typography8>
        </td>
      </tr>
      <tr>
        <td>16px / Medium</td>
        <td>Regular</td>
        <td>16px</td>
        <td>20px</td>
        <td>
          <Typography9>
            The quick brown fox jumps over the lazy dog
          </Typography9>
        </td>
      </tr>
      <tr>
        <td>16px / Light</td>
        <td>Light</td>
        <td>16px</td>
        <td>20px</td>
        <td>
          <Typography10>
            The quick brown fox jumps over the lazy dog
          </Typography10>
        </td>
      </tr>
      <tr>
        <td>14.5px / Medium</td>
        <td>Medium</td>
        <td>14px</td>
        <td>20px</td>
        <td>
          <Typography11>
            The quick brown fox jumps over the lazy dog
          </Typography11>
        </td>
      </tr>
      <tr>
        <td>14px / Regular</td>
        <td>Regular</td>
        <td>14px</td>
        <td>20px</td>
        <td>
          <Typography12>
            The quick brown fox jumps over the lazy dog
          </Typography12>
        </td>
      </tr>
      <tr>
        <td>13px / Medium</td>
        <td>Medium</td>
        <td>13px</td>
        <td>20px</td>
        <td>
          <Typography13>
            The quick brown fox jumps over the lazy dog
          </Typography13>
        </td>
      </tr>
      <tr>
        <td>13px / SemiBold</td>
        <td>Regular</td>
        <td>13px</td>
        <td>20px</td>
        <td>
          <Typography14>
            The quick brown fox jumps over the lazy dog
          </Typography14>
        </td>
      </tr>
    </tbody>
  </Table>
);

export default TypographyTable;
