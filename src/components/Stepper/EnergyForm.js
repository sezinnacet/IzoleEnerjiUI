import { Button } from "@mui/material";
import { Form, Input, Select, Space } from "antd";
import React from "react";
import { useStoreProducts } from "../../store/store";

const { Option } = Select;

const EnergyForm = ({
  initialValues,
  activeStep,
  handleFinish,
  handleBack,
}) => {
  const [form] = Form.useForm();
  const products = useStoreProducts((state) => state.products);

  const onFinish = (values) => {
    console.log(values);
    handleFinish(values);
  };

  const stepForms = [
    <Form
      form={form}
      name="currentBill"
      onFinish={onFinish}
      initialValues={initialValues}
      labelCol={{
        span: 6,
      }}
      wrapperCol={{
        span: 18,
      }}
      colon={false}
      style={{
        width: "100%",
        textAlign: "start",
        backgroundColor: "#91b087",
        padding: "5% 5% 2% 5%",
        borderRadius: "25px",
      }}
      labelAlign="left"
      autoComplete="off"
    >
      <>
        <Form.Item
          label={
            <label style={{ color: "white", fontWeight: 700, fontSize: 16 }}>
              Mevcut Fatura Tutarı
            </label>
          }
          name="lastBill"
        >
          <Input
            placeholder="Bir fatura tutarı giriniz"
            type="number"
            suffix="TL"
          />
        </Form.Item>
        <Form.Item
          label={
            <label style={{ color: "white", fontWeight: 700, fontSize: 16 }}>
              İç Mekan Sıcaklığı
            </label>
          }
          rules={[
            {
              required: true,
              message: "İç Sıcaklık zorunludur!",
            },
          ]}
          name="insideDegree"
        >
          <Input placeholder="Sıcaklık giriniz" type="number" suffix="°C" />
        </Form.Item>
        <Form.Item
          label={
            <label style={{ color: "white", fontWeight: 700, fontSize: 16 }}>
              Dış Mekan Sıcaklığı
            </label>
          }
          rules={[
            {
              required: true,
              message: "Dış Sıcaklık zorunludur!",
            },
          ]}
          name="outsideDegree"
        >
          <Input placeholder="Sıcaklık giriniz" type="number" suffix="°C" />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 24 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Geri
            </Button>
            <Button
              sx={{
                color: "white",
                borderColor: "white",
                ":hover": { borderColor: "white" },
                pr: 3,
                pl: 3,
              }}
              variant="outlined"
              type="submit"
            >
              İleri
            </Button>
          </div>
        </Form.Item>
      </>
    </Form>,
    <Form
      form={form}
      name="currentValues"
      onFinish={onFinish}
      initialValues={initialValues}
      labelCol={{
        span: 6,
      }}
      wrapperCol={{
        span: 18,
      }}
      colon={false}
      style={{
        width: "100%",
        textAlign: "start",
        backgroundColor: "#91b087",
        padding: "5% 5% 2% 5%",
        borderRadius: "25px",
      }}
      labelAlign="left"
      autoComplete="off"
    >
      <>
        {products?.map((category, index) => (
          <Form.Item
            label={
              <label style={{ color: "white", fontWeight: 700, fontSize: 16 }}>
                Mevcut {category?.categoryName} Tipi
              </label>
            }
          >
            <Space.Compact style={{ width: "100%" }}>
              <Form.Item
                name={[
                  `${category?.categoryName}`,
                  `current${category?.categoryName}`,
                ]}
                noStyle
                rules={[
                  {
                    required: true,
                    message: `${category?.categoryName} tipi zorunludur!`,
                  },
                ]}
              >
                <Select
                  placeholder={`Bir ${category?.categoryName} tipi seçiniz`}
                  style={{ backgroundColor: "rgba(119, 150, 109, 0.5)" }}
                >
                  {category?.products.map((roof, i) => {
                    return (
                      <Option key={i} value={i}>
                        {roof.entityName} (R = {roof.rValue})
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
              <Form.Item
                name={[
                  `${category?.categoryName}`,
                  `current${category?.categoryName}Area`,
                ]}
                noStyle
                rules={[
                  {
                    required: true,
                    message: "Alan zorunludur!",
                  },
                ]}
              >
                <Input
                  style={{
                    width: "50%",
                  }}
                  type="number"
                  placeholder="Alan"
                  suffix={"m²"}
                />
              </Form.Item>
            </Space.Compact>
          </Form.Item>
        ))}
        {/* <Form.Item
          label={
            <label style={{ color: "white", fontWeight: 700, fontSize: 16 }}>
              Mevcut Çatı Tipi
            </label>
          }
        >
          <Space.Compact style={{ width: "100%" }}>
            <Form.Item
              name={["roof", "currentRoof"]}
              noStyle
              rules={[
                {
                  required: true,
                  message: "Çatı tipi zorunludur!",
                },
              ]}
            >
              <Select
                placeholder="Bir çatı tipi seçiniz"
                style={{ backgroundColor: "rgba(119, 150, 109, 0.5)" }}
              >
                {roofTypes.map((roof) => (
                  <Option value={roof.r}>
                    {roof.name} (R = {roof.r})
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name={["roof", "currentRoofArea"]}
              noStyle
              rules={[
                {
                  required: true,
                  message: "Alan zorunludur!",
                },
              ]}
            >
              <Input
                style={{
                  width: "50%",
                }}
                type="number"
                placeholder="Alan"
                suffix={"m²"}
              />
            </Form.Item>
          </Space.Compact>
        </Form.Item>
        <Form.Item
          label={
            <label style={{ color: "white", fontWeight: 700, fontSize: 16 }}>
              Mevcut Kapı Tipi
            </label>
          }
        >
          <Space.Compact style={{ width: "100%" }}>
            <Form.Item
              name={["door", "currentDoor"]}
              noStyle
              rules={[
                {
                  required: true,
                  message: "Çatı tipi zorunludur!",
                },
              ]}
            >
              <Select
                style={{ backgroundColor: "rgba(119, 150, 109, 0.5)" }}
                placeholder="Bir kapı tipi seçiniz"
              >
                {doorTypes.map((roof) => (
                  <Option value={roof.r}>
                    {roof.name} (R = {roof.r})
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name={["door", "currentDoorArea"]}
              noStyle
              rules={[
                {
                  required: true,
                  message: "Alan zorunludur!",
                },
              ]}
            >
              <Input
                style={{
                  width: "50%",
                }}
                type="number"
                placeholder="Alan"
                suffix={"m²"}
              />
            </Form.Item>
          </Space.Compact>
        </Form.Item>
        <Form.Item
          label={
            <label style={{ color: "white", fontWeight: 700, fontSize: 16 }}>
              Mevcut Pencere Tipi
            </label>
          }
        >
          <Space.Compact style={{ width: "100%" }}>
            <Form.Item
              name={["window", "currentWindow"]}
              noStyle
              rules={[
                {
                  required: true,
                  message: "Pencere tipi zorunludur!",
                },
              ]}
            >
              <Select
                style={{ backgroundColor: "rgba(119, 150, 109, 0.5)" }}
                placeholder="Bir pencere tipi seçiniz"
              >
                {windowTypes.map((roof) => (
                  <Option value={roof.r}>
                    {roof.name} (R = {roof.r})
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name={["window", "currentWindowArea"]}
              noStyle
              rules={[
                {
                  required: true,
                  message: "Alan zorunludur!",
                },
              ]}
            >
              <Input
                style={{
                  width: "50%",
                }}
                type="number"
                suffix={"m²"}
                placeholder="Alan"
              />
            </Form.Item>
          </Space.Compact>
        </Form.Item>
        <Form.Item
          label={
            <label style={{ color: "white", fontWeight: 700, fontSize: 16 }}>
              Mevcut Yalıtım Tipi
            </label>
          }
        >
          <Space.Compact style={{ width: "100%" }}>
            <Form.Item
              name={["wall", "currentWall"]}
              noStyle
              rules={[
                {
                  required: true,
                  message: "Yalıtım tipi zorunludur!",
                },
              ]}
            >
              <Select
                style={{ backgroundColor: "rgba(119, 150, 109, 0.5)" }}
                placeholder="Bir duvar tipi seçiniz"
              >
                {isolationTypes.map((roof) => (
                  <Option value={roof.r}>
                    {roof.name} (R = {roof.r})
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name={["wall", "currentWallArea"]}
              noStyle
              rules={[
                {
                  required: true,
                  message: "Alan zorunludur!",
                },
              ]}
            >
              <Input
                style={{
                  width: "50%",
                }}
                type="number"
                suffix={"m²"}
                placeholder="Alan"
              />
            </Form.Item>
          </Space.Compact>
        </Form.Item> */}
        <Form.Item wrapperCol={{ span: 24 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Geri
            </Button>
            <Button
              sx={{
                color: "white",
                borderColor: "white",
                ":hover": { borderColor: "white" },
                pr: 3,
                pl: 3,
              }}
              variant="outlined"
              type="submit"
            >
              İleri
            </Button>
          </div>
        </Form.Item>
      </>
    </Form>,
    <Form
      form={form}
      name="newValues"
      onFinish={onFinish}
      initialValues={initialValues}
      labelCol={{
        span: 6,
      }}
      wrapperCol={{
        span: 18,
      }}
      colon={false}
      style={{
        width: "100%",
        textAlign: "start",
        backgroundColor: "#91b087",
        padding: "5% 5% 2% 5%",
        borderRadius: "25px",
      }}
      labelAlign="left"
      autoComplete="off"
    >
      <>
        {products?.map((category, index) => (
          <Form.Item
            label={
              <label style={{ color: "white", fontWeight: 700, fontSize: 16 }}>
                Yeni {category?.categoryName} Tipi
              </label>
            }
          >
            <Form.Item
              name={[
                `${category?.categoryName}`,
                `new${category?.categoryName}`,
              ]}
              noStyle
              rules={[
                {
                  required: true,
                  message: `${category?.categoryName} tipi zorunludur!`,
                },
              ]}
            >
              <Select
                placeholder={`Bir ${category?.categoryName} tipi seçiniz`}
                style={{ backgroundColor: "rgba(119, 150, 109, 0.5)" }}
              >
                {category?.products.map((roof, i) => {
                  return (
                    <Option key={i} value={i}>
                      {roof.entityName} (R = {roof.rValue})
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
          </Form.Item>
        ))}
        {/* <Form.Item
          label={
            <label style={{ color: "white", fontWeight: 700, fontSize: 16 }}>
              Yeni Çatı Tipi
            </label>
          }
        >
          <Form.Item
            name={["roof", "newRoof"]}
            noStyle
            rules={[
              {
                required: true,
                message: "Çatı tipi zorunludur!",
              },
            ]}
          >
            <Select
              placeholder="Bir çatı tipi seçiniz"
              style={{ backgroundColor: "rgba(119, 150, 109, 0.5)" }}
            >
              {roofTypes.map((roof) => (
                <Option value={roof.r}>
                  {roof.name} (R = {roof.r})
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Form.Item>
        <Form.Item
          label={
            <label style={{ color: "white", fontWeight: 700, fontSize: 16 }}>
              Yeni Kapı Tipi
            </label>
          }
        >
          <Form.Item
            name={["door", "newDoor"]}
            noStyle
            rules={[
              {
                required: true,
                message: "Kapı tipi zorunludur!",
              },
            ]}
          >
            <Select placeholder="Bir kapı tipi seçiniz">
              {doorTypes.map((roof) => (
                <Option value={roof.r}>
                  {roof.name} (R = {roof.r})
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Form.Item>
        <Form.Item
          label={
            <label style={{ color: "white", fontWeight: 700, fontSize: 16 }}>
              Yeni Pencere Tipi
            </label>
          }
        >
          <Form.Item
            name={["window", "newWindow"]}
            noStyle
            rules={[
              {
                required: true,
                message: "Pencere tipi zorunludur!",
              },
            ]}
          >
            <Select
              placeholder="Bir pencere tipi seçiniz"
              style={{ backgroundColor: "rgba(119, 150, 109, 0.5)" }}
            >
              {windowTypes.map((roof) => (
                <Option value={roof.r}>
                  {roof.name} (R = {roof.r})
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Form.Item>
        <Form.Item
          label={
            <label style={{ color: "white", fontWeight: 700, fontSize: 16 }}>
              Yeni Yalıtım Tipi
            </label>
          }
        >
          <Form.Item
            name={["wall", "newWall"]}
            noStyle
            rules={[
              {
                required: true,
                message: "Yalıtım tipi zorunludur!",
              },
            ]}
          >
            <Select
              placeholder="Bir duvar tipi seçiniz"
              style={{ backgroundColor: "rgba(119, 150, 109, 0.5)" }}
            >
              {isolationTypes.map((roof) => (
                <Option value={roof.r}>
                  {roof.name} (R = {roof.r})
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Form.Item> */}
        <Form.Item wrapperCol={{ span: 24 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Geri
            </Button>
            <Button
              type="submit"
              sx={{
                color: "black",
                backgroundColor: "white",
                ":hover": { backgroundColor: "white" },
                pr: 3,
                pl: 3,
              }}
              variant="contained"
            >
              Hesapla
            </Button>
          </div>
        </Form.Item>
      </>
    </Form>,
  ];
  return stepForms[activeStep];
};

export default EnergyForm;
