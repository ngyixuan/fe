import React, { useContext } from 'react';
import { Form, Input, Select, Col, Row } from 'antd';
import { MinusCircleOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';

import { CommonStateContext } from '@/App';

import { NS } from '../../../constants';

interface Props {
  fullName?: string | (string | number)[];
  field: any;
  remove: Function;
}

const TagItem = (props: Props) => {
  const { t } = useTranslation('KVTagSelect');
  const { busiGroups, datasourceList } = useContext(CommonStateContext);
  const { fullName = [], field, remove } = props;
  const form = Form.useFormInstance();
  const key = Form.useWatch([...fullName, field.name, 'key']);
  const func = Form.useWatch([...fullName, field.name, 'func']);

  return (
    <>
      <Row gutter={[10, 10]}>
        <Col span={5}>
          <Form.Item name={[field.name, 'key']} rules={[{ required: true, message: t('tag.key.msg') }]}>
            <Select
              options={[
                {
                  label: t(`${NS}:notification_configuration.attributes_options.group_name`),
                  value: 'group_name',
                },
                {
                  label: t(`${NS}:notification_configuration.attributes_options.cluster`),
                  value: 'cluster',
                },
              ]}
              onChange={() => {
                const newValues = _.cloneDeep(form.getFieldsValue());
                _.set(newValues, [...fullName, field.name, 'value'], undefined);
                form.setFieldsValue(newValues);
              }}
            />
          </Form.Item>
        </Col>
        <Col span={3}>
          <Form.Item name={[field.name, 'func']}>
            <Select>
              <Select.Option value='=='>==</Select.Option>
              <Select.Option value='=~'>=~</Select.Option>
              <Select.Option value='in'>in</Select.Option>
              <Select.Option value='not in'>not in</Select.Option>
              <Select.Option value='!='>!=</Select.Option>
              <Select.Option value='!~'>!~</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={15}>
          {_.includes(['not in', 'in'], func) && (
            <Form.Item
              name={[field.name, 'value']}
              rules={[{ required: true, message: t('tag.value.msg') }]}
              getValueFromEvent={(value) => {
                if (_.isArray(value)) {
                  return _.join(value, ',');
                }
                return value;
              }}
              getValueProps={(value) => {
                if (_.isString(value)) {
                  return { value: _.split(value, ',') };
                }
                return { value };
              }}
            >
              <Select mode='tags' open={false} style={{ width: '100%' }} placeholder={t('tag.value.placeholder1')} tokenSeparators={[' ']}></Select>
            </Form.Item>
          )}
          {_.includes(['==', '!='], func) && (
            <>
              {key === 'group_name' && (
                <Form.Item name={[field.name, 'value']} rules={[{ required: true, message: t('tag.value.msg') }]}>
                  <Select
                    showSearch
                    optionFilterProp='label'
                    options={_.map(busiGroups, (item) => {
                      return {
                        label: item.name,
                        value: item.name,
                      };
                    })}
                  />
                </Form.Item>
              )}
              {key === 'cluster' && (
                <Form.Item name={[field.name, 'value']} rules={[{ required: true, message: t('tag.value.msg') }]}>
                  <Select
                    showSearch
                    optionFilterProp='label'
                    options={_.map(datasourceList, (item) => {
                      return {
                        label: item.name,
                        value: item.name,
                      };
                    })}
                  />
                </Form.Item>
              )}
            </>
          )}
          {_.includes(['=~', '!~'], func) && (
            <Form.Item style={{ marginBottom: 0 }} name={[field.name, 'value']} rules={[{ required: true, message: t('tag.value.msg') }]}>
              <Input placeholder={_.includes(['=~', '!~'], func) ? t('tag.value.placeholder2') : undefined} />
            </Form.Item>
          )}
        </Col>
        <Col>
          <MinusCircleOutlined style={{ marginTop: '8px' }} onClick={() => remove(field.name)} />
        </Col>
      </Row>
    </>
  );
};

export default TagItem;
