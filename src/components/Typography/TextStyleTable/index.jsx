import React from 'react';

// Components
import {
  Sample1,
  Sample2,
  Sample3,
  Sample4,
  Sample5,
  Sample6,
  Sample7,
  Sample8,
  Sample9,
  Sample10,
  Sample11,
  Sample12,
  Sample13,
  Sample14,
} from 'components/common/Samples/styled';

// Styles
import { Table } from 'components/common/Table/styled';

const TextStyleTable = () => (
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
          <Sample1>
            The quick brown fox jumps over the lazy dog
          </Sample1>
        </td>
      </tr>
      <tr>
        <td>32px / SemiBold</td>
        <td>Medium</td>
        <td>32px</td>
        <td>36px</td>
        <td>
          <Sample2>
            The quick brown fox jumps over the lazy dog
          </Sample2>
        </td>
      </tr>
      <tr>
        <td>24px / Medium</td>
        <td>Regular</td>
        <td>24px</td>
        <td>28px</td>
        <td>
          <Sample3>
            The quick brown fox jumps over the lazy dog
          </Sample3>
        </td>
      </tr>
      <tr>
        <td>22px / SemiBold</td>
        <td>Medium</td>
        <td>22px</td>
        <td>24px</td>
        <td>
          <Sample4>
            The quick brown fox jumps over the lazy dog
          </Sample4>
        </td>
      </tr>
      <tr>
        <td>20px / Medium</td>
        <td>Medium</td>
        <td>20px</td>
        <td>22px</td>
        <td>
          <Sample5>
            The quick brown fox jumps over the lazy dog
          </Sample5>
        </td>
      </tr>
      <tr>
        <td>18px / Light</td>
        <td>Regular</td>
        <td>18px</td>
        <td>22px</td>
        <td>
          <Sample6>
            The quick brown fox jumps over the lazy dog
          </Sample6>
        </td>
      </tr>
      <tr>
        <td>16px / Regular</td>
        <td>Bold</td>
        <td>16px</td>
        <td>24px</td>
        <td>
          <Sample7>
            The quick brown fox jumps over the lazy dog
          </Sample7>
        </td>
      </tr>
      <tr>
        <td>16px / SemiBold</td>
        <td>Medium</td>
        <td>16px</td>
        <td>20px</td>
        <td>
          <Sample8>
            The quick brown fox jumps over the lazy dog
          </Sample8>
        </td>
      </tr>
      <tr>
        <td>16px / Medium</td>
        <td>Regular</td>
        <td>16px</td>
        <td>20px</td>
        <td>
          <Sample9>
            The quick brown fox jumps over the lazy dog
          </Sample9>
        </td>
      </tr>
      <tr>
        <td>16px / Light</td>
        <td>Light</td>
        <td>16px</td>
        <td>20px</td>
        <td>
          <Sample10>
            The quick brown fox jumps over the lazy dog
          </Sample10>
        </td>
      </tr>
      <tr>
        <td>14.5px / Medium</td>
        <td>Medium</td>
        <td>14px</td>
        <td>20px</td>
        <td>
          <Sample11>
            The quick brown fox jumps over the lazy dog
          </Sample11>
        </td>
      </tr>
      <tr>
        <td>14px / Regular</td>
        <td>Regular</td>
        <td>14px</td>
        <td>20px</td>
        <td>
          <Sample12>
            The quick brown fox jumps over the lazy dog
          </Sample12>
        </td>
      </tr>
      <tr>
        <td>13px / Medium</td>
        <td>Medium</td>
        <td>13px</td>
        <td>20px</td>
        <td>
          <Sample13>
            The quick brown fox jumps over the lazy dog
          </Sample13>
        </td>
      </tr>
      <tr>
        <td>13px / SemiBold</td>
        <td>Regular</td>
        <td>13px</td>
        <td>20px</td>
        <td>
          <Sample14>
            The quick brown fox jumps over the lazy dog
          </Sample14>
        </td>
      </tr>
    </tbody>
  </Table>
);

export default TextStyleTable;
