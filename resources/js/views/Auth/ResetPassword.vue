<template>
    <v-container fluid>
        <v-row>
            <v-col
                cols="12"
                md="8"
                class="auth-bg-hui d-flex flex-column align-center justify-center"
                :class="
                    $vuetify.breakpoint.mdAndUp ? 'min-h-100vh' : 'min-h-00vh'
                "
            >
                <div>
                    <Logo />
                </div>

                <span
                    class="white--text"
                    :class="
                        $vuetify.breakpoint.mdAndUp ? 'display-1 mt-4' : 'title'
                    "
                    >اینجا هر کسی می‌تونه بنویسه!</span
                >
                <span class="mt-7 font-weight-bold hidden-sm-and-down"
                    >همین حالا حساب کاربری خودت را بساز و دوران جدید وبلاگ نویسی
                    را شروع کن.</span
                >
            </v-col>
            <v-col cols="12" md="4" class="d-flex align-center">
                <div class="w-100 mx-5">
                    <span class="blue--text font-weight-bold "
                        >بازیابی رمز عبور</span
                    >
                    <v-form ref="form" lazy-validation>
                        <v-text-field
                            :error-messages="errors.email"
                            v-model="form.email"
                            label="آدرس ایمیل"
                            outlined
                            rounded
                            class="mt-9"
                            :rules="[required, checkEMail]"
                        ></v-text-field>
                        <v-text-field
                            :error-messages="errors.password"
                            v-model="form.password"
                            type="password"
                            label="رمز عبور"
                            outlined
                            rounded
                            class=""
                            :rules="[required, lessThan(3, 'رمز عبور')]"
                        ></v-text-field>
                        <v-text-field
                            :error-messages="errors.password"
                            v-model="form.password_confirmation"
                            type="password"
                            label="تایید رمز عبور"
                            outlined
                            rounded
                            class=""
                            :rules="[required, lessThan(3, 'تایید رمز عبور')]"
                        ></v-text-field>
                        <div class="d-flex justify-end">
                            <template>
                                <v-btn
                                    color="info"
                                    rounded
                                    @click="changePassword"
                                    large
                                    :loading="loading"
                                >
                                    بازیابی رمز عبور
                                    <v-icon class="mr-1"
                                        >mdi-chevron-left</v-icon
                                    >
                                </v-btn>
                            </template>
                        </div>
                    </v-form>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Logo from "@/components/Logo/";

export default {
    name: "ResetPassword",
    components: { Logo },
    data: function() {
        return {
            form: {
                token: this.$route.params.token,
                email: null,
                password: null,
                password_confirmation: null
            },

            loading: false,
            errors: {
                email: null,
                password: null,
                password_confirmation: null
            }
        };
    },
    computed: {
        token() {
            return (this.form.token = this.$route.params.token);
        }
    },
    methods: {
        changePassword() {
            if (this.$refs.form.validate()) {
                this.loading = true;
                // axios.post('/api/reset-password',this.form)
                this.$store
                    .dispatch("user/resetPassword", this.form)
                    .then(() => {
                        this.$router.push({ name: "home" });
                    })
                    .catch(error => {
                        this.errors.email = error.response.data.errors.email[0];
                        this.errors.password =
                            error.response.data.errors.password[0];
                    })
                    .finally(() => (this.loading = false));
            }
        },
        required(value) {
            return !!value || "این فیلد الزامی است";
        },
        lessThan(length, field) {
            return value =>
                (value ? value.length >= length : false) ||
                `فیلد ${field} نباید کمتر از ${length} کارکتر باشد`;
        },
        moreThan(length, field) {
            return value =>
                (value ? value.length <= length : false) ||
                `فیلد ${field} نباید بیشتر از ${length} کارکتر باشد`;
        },
        checkEMail(value) {
            return (
                /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(value) ||
                "فرمت ایمیل نا معتبر"
            );
        }
    }
};
</script>
