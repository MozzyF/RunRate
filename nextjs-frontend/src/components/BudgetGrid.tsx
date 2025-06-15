"use client";

import React, { useState } from 'react';

interface BudgetItem {
  id: string;
  category: string;
  months: {
    [key: string]: number;
  };
}

interface BudgetGridProps {
  data: BudgetItem[];
  onUpdate: (id: string, month: string, value: number) => void;
}

export const BudgetGrid: React.FC<BudgetGridProps> = ({ data, onUpdate }) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  const [editingCell, setEditingCell] = useState<{ id: string; month: string } | null>(null);
  const [editValue, setEditValue] = useState<string>('');

  const handleCellClick = (id: string, month: string, value: number) => {
    setEditingCell({ id, month });
    setEditValue(value.toString());
  };

  const handleSave = () => {
    if (editingCell) {
      onUpdate(editingCell.id, editingCell.month, parseFloat(editValue) || 0);
      setEditingCell(null);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category
            </th>
            {months.map((month) => (
              <th key={month} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {month}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {item.category}
              </td>
              {months.map((month) => (
                <td
                  key={`${item.id}-${month}`}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 cursor-pointer hover:bg-gray-50"
                  onClick={() => handleCellClick(item.id, month, item.months[month] || 0)}
                >
                  {editingCell?.id === item.id && editingCell?.month === month ? (
                    <input
                      type="number"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      onBlur={handleSave}
                      onKeyPress={(e) => e.key === 'Enter' && handleSave()}
                      className="w-24 px-2 py-1 border rounded"
                      autoFocus
                    />
                  ) : (
                    item.months[month]?.toLocaleString('en-GB', {
                      style: 'currency',
                      currency: 'GBP'
                    }) || '£0.00'
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}; 